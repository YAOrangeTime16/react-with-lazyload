import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header  from './Header';
import DefaultPage from './Contents/DefaultPage';

//--- Code-splitting with the help of `react-loadable`
const PageTwo = Loadable({
  loader: () => import('./Contents/PageTwo'),
  loading: ()=><div>loading</div>
});

const About = Loadable({
  loader: () => import('./Contents/About'),
  loading: ()=><div>loading</div>
});
//---------------------

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
