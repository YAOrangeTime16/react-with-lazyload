import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({toggleClass, onToggleMenu}) => (
  <div className={`header-nav ${toggleClass}`}>
    <Link to={process.env.PUBLIC_URL + '/'}><button onClick={onToggleMenu} className="non-border">Home</button></Link>
    <Link to={process.env.PUBLIC_URL + '/page2'}><button onClick={onToggleMenu} className="non-border">Page2</button></Link>
    <Link to={process.env.PUBLIC_URL + '/page2'}><button onClick={onToggleMenu} className="non-border">Page2</button></Link>
    <Link to={process.env.PUBLIC_URL + '/about'}><button onClick={onToggleMenu} className="non-border">About</button></Link>
    <hr />
  </div>
)
export default HeaderNav;