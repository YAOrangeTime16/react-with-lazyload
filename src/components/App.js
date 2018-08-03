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
    console.log(process.env.PUBLIC_URL)
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={DefaultPage}/>
            <Route path={process.env.PUBLIC_URL + '/page2'} component={PageTwo}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
