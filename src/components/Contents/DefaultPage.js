import React from 'react';
import Home from './Home';
import Nav from '../Nav';

const DefaultPage = () => (
  <div className="container content">
    <div className="row">
      <Nav />
      <Home/>
    </div>
  </div>
);

export default DefaultPage;