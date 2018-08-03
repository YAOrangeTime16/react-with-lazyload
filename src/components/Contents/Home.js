import React, { Component, Fragment } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';
import Modal from './Modal';

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
            const {image, about, type, description} = item;
            return (
              <figure key={item.id} className="image-container" onClick={()=>this.handleModalContent(image, about, type, false, description)}>
                <LazyLoadComponent >
                    <img  src={item.imageS}
                          srcSet={`${item.imageS} 300w,
                                  ${item.imageM} 750w,
                                  ${item.image} 1000w`}
                          alt={item.about}/>
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
            const {image, about, type, description} = item;
            return (
            <figure key={item.id} className="image-container-port" onClick={()=>this.handleModalContent(image, about, type, true, description)}>
              <LazyLoadComponent>
              <img  src={item.image}
                    srcSet={`${item.imageS} 320w,
                            ${item.imageM} 750w,
                            ${item.image} 1200w`}
                    alt={item.about}/>
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

  handleModalContent = (item, about, type, portrait, description="") =>{
    this.setState({enlargeItem: {item, about, type, portrait, description} })
    this.openModal();
  }

  render(){
    const { enlargeItem, modal } = this.state;
    return (
      <Fragment>

        { modal 
          ? <Modal
              closeModal={this.closeModal}
              enlargeItem={this.state.enlargeItem} />
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