import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Repos from './components/Repos/Repos';

export default (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Search} />
    <Route exact path="/repos" component={Repos} />
    <Redirect from="*" to="/" />
  </Switch>
);
