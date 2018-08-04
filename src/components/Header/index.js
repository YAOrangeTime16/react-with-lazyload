import React, { Component } from 'react';
import MobileMenu from './MobileMenu';
import HeaderNav from './HeaderNav';

class Header extends Component {
  state = {
    visibility: 'hidden'
  }

  onToggleMenu = () => 
    this.setState(
      (prevState)=>(prevState.visibility === 'hidden') ? {visibility: 'show'} : {visibility: 'hidden'}
    );

  render(){
    return (
      <div className="u-full-width fixed-header mobile-header">
        <h1>Logo</h1>
        <HeaderNav
          toggleClass={this.state.visibility}
          onToggleMenu={this.onToggleMenu}/>
        <MobileMenu
          onToggleMenu={this.onToggleMenu}/>
      </div>
    )
  }
}

export default Header;