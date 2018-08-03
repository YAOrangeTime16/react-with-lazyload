import React, { Component, Fragment } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';

const LazyLoadComponent = ({children}) => (
  <LazyLoad height={200} offset={400} once>
      <div>
        { children }
      </div>
  </LazyLoad>
);

export default class Home extends Component {
  state={
    landscape: [],
    portrait: [],
    modal: false,
    enlargeItem: {}
  }

  componentDidMount(){
    axios.get('db.json')
    .then(res=>{
      const { all } = res.data;
      const landscape = all.filter(item=>{
        if(item.orientation==='landscape')
        return item.orientation
      });
      const portrait = all.filter(item=>{
        if(item.orientation==='portrait')
        return item.orientation
      })
      this.setState({landscape, portrait})
    })
  }

  renderLandscapeImages = () => {
    const { landscape } = this.state;
    return (
      <ScrollableAnchor id="interior1" >
      <div className="showcaseContainer">
      {
        landscape.map(item=>{
          const {image, about, type} = item;
          return (
            <figure className="image-container" onClick={()=>this.enlargeItem(image, about, type, false)}>
              <LazyLoadComponent key={item.id} >
                  <img src={item.image} alt={item.about}/>
                  <figcaption>{item.about}</figcaption>
              </LazyLoadComponent>
            </figure>
          )
        })
      }
      </div>
      </ScrollableAnchor>
    )
  }

  renderPortraitImages = () => {
    const { portrait } = this.state;
    return (
      <ScrollableAnchor id="interior2" >
      <div className="showcaseContainer">
      {
        portrait.map(item=>{
          const {image, about, type} = item;
          return (
          <figure className="image-container-port" onClick={()=>this.enlargeItem(image, about, type, true)}>
            <LazyLoadComponent key={item.id} >
              <img src={item.image} alt={item.about}/>
              <figcaption>{item.about}</figcaption>
            </LazyLoadComponent>
          </figure>
          )
        })
      }
      </div>
      </ScrollableAnchor>
    )
  }

  closeModal = () => this.setState({modal: false})
  openModal = () => this.setState({modal: true})

  enlargeItem = (item, about, type, portrait) =>{
    this.setState({enlargeItem: {item, about, type, portrait} })
    this.openModal();
  }


  render(){
    const { enlargeItem, modal } = this.state;
    return (
      <Fragment>

        { modal 
          ? (
              <div className="modal">
                <button className="non-border modal-text" onClick={this.closeModal}>CLOSE</button>
                <div className={enlargeItem.portrait ? 'modal-image-container-port' : 'modal-image-container'}>
                  <img src={ enlargeItem.item } alt="largeImage"/>
                  <p className="modal-text">{ enlargeItem.about }, { enlargeItem.type }</p>
                </div>
              </div>
            )
          : null
        }

        <div className="ten columns">
          {this.renderLandscapeImages()}
          <hr />
          {this.renderPortraitImages()}
        </div>
      </Fragment>
    )
  }
}