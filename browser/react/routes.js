import React from 'react';
//import {BrowserRouter as Router} from 'react-router-dom';
//import {Route, hashHistory, IndexRedirect, IndexRoute, browserHistory } from 'react-router-dom';
import { browserHistory, hashHistory, Router, Route } from 'react-router';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import UserDashboard from './containers/UserDashboard';

import { getUserDays, computeInitialSelectedDay} from './action-creators/days';
import {computeNumberOfLoggedDays} from './action-creators/body';


const onUserDashboardEnter = function (nextRouterState) {
  console.log('inside onUserDashboardEnter');
  store.dispatch(getUserDays());
  store.dispatch(computeInitialSelectedDay());
  store.dispatch(computeNumberOfLoggedDays());
};

export default () => {
  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ UserDashboard } onEnter={ onUserDashboardEnter }/>
    </Router>
  </Provider>
  );
}
