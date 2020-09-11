import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';

const Routes: React.FC = () => (
  <BrowserRouter>

    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/give-classes" component={TeacherForm} isPrivate />
      <Route path="/search-classes" component={TeacherList} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
