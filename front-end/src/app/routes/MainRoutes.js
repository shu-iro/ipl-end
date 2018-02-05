// @flow weak

import React            from 'react';
import {
  Route,
  Switch
 }                      from 'react-router';
import Home             from '../views/home';
import About            from '../views/about';
import PrivateRoute     from '../components/privateRoute/PrivateRoute';
import Protected        from '../views/protected';
import PageNotFound     from '../views/pageNotFound';
import ReportForm       from '../views/reportForm';
import Login from "../views/login";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/report/:machineName" component={ReportForm} />
      <Route path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
