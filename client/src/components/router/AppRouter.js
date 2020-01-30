import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
//import Button from '../Button/Button';
// import Search from '../Search/Search';
const Button = Loadable({
  loader: () => import('../Button/Button'),
  loading() {
    return <div>Loading...</div>;
  }
});

const Search = Loadable({
  loader: () => import('../Search/Search'),
  loading() {
    return <div>Loading.....</div>;
  }
});

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Button} />
            <Route path="/find" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}
