import React from 'react';
import { goToTop, removeHash } from 'react-scrollable-anchor';

class Nav extends React.Component {
  render(){
    return(
      <section className="two columns">
        <ul className="fixed">
          <li><a href="#interior1">Link 1</a></li>
          <li><a href="#interior2">Link 2</a></li>
        </ul>
      </section>
    )
  }
}

export default Nav;