import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <div>
    <Link to='/'><button className="non-border">Home</button></Link>
    <Link to='/page2'><button className="non-border">Page2</button></Link>
    <Link to='/about'><button className="non-border">About</button></Link>
    <hr />
  </div>
)
export default HeaderNav;