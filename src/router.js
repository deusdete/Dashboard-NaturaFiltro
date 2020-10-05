import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AdminLayout from './painel/layout/Admin'
import Login from './painel/pages/user-pages/Login'
export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/user-pages/login-1" component={ Login }  />
        <Route exact path="/" component={AdminLayout} />
      </Switch>
    </BrowserRouter>
  )
}