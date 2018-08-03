import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header  from './Header';
import Home from './Contents/Home';
import Nav from './Nav';
import './App.css';

const DefaultPage = () => (
  <div className="container">
    <div className="row">
      <Nav />
      <Home/>
    </div>
  </div>
);
const PageTwo = () => (<div>Page2</div>)
const About = () => (<div>About</div>)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={DefaultPage}/>
            <Route path='/page2' component={PageTwo}/>
            <Route path='/about' component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
