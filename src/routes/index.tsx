import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SingIn} exact />
    <Route path="/singup" component={SingUp} exact />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
