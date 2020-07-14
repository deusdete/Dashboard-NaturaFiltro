import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import AuthRoute from '../utils/AuthRoute'


import Spinner from './pages/shared/Spinner';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

const Buttons = lazy(() => import('./pages/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./pages/basic-ui/Dropdowns'));
const Typography = lazy(() => import('./pages/basic-ui/Typography'));

const BasicElements = lazy(() => import('./pages/form-elements/BasicElements'));

const BasicTable = lazy(() => import('./pages/tables/BasicTable'));

const FontAwesome = lazy(() => import('./pages/icons/FontAwesome'));


const ChartJs = lazy(() => import('./pages/charts/ChartJs'));

const Error404 = lazy(() => import('./pages/user-pages/Error404'));
const Error500 = lazy(() => import('./pages/user-pages/Error500'));

const Login = lazy(() => import('./pages/user-pages/Login'));
const Register1 = lazy(() => import('./pages/user-pages/Register'));

const BlankPage = lazy(() => import('./pages/user-pages/BlankPage'));

const MinhasEmpresas = lazy(() => import('./pages/empresa/MinhasEmpresas'));
const AdicionaEmpresa = lazy(() => import('./pages/empresa/AdicionaEmpresa'));
const Clientes = lazy(() => import('./pages/clientes'));
const Perfil = lazy(() => import('./pages/usuario/Perfil'));


export default function AppRoutes(){
  return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ BlankPage } />

          <Route exact path="/basic-ui/buttons" component={ Buttons } />
          <Route exact path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route exact path="/basic-ui/typography" component={ Typography } />

          <Route exact path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route exact path="/tables/basic-table" component={ BasicTable } />

          <Route exact path="/icons/font-awesome" component={ FontAwesome } />

          <Route exact path="/charts/chart-js" component={ ChartJs } />


          {/* <AuthRoute exact path="/user-pages/login-1" component={ Login }  />
          <AuthRoute exact path="/user-pages/register-1" component={ Register1 }/> */}

          <Route exact path="/user-pages/error-404" component={ Error404 } />
          <Route exact path="/user-pages/error-500" component={ Error500 } />

          <Route exact path="/user-pages/blank-page" component={ BlankPage } />

          <Route exact path="/cliente/todas" component={ Clientes } />
          <Route exact path="/cliente/adiciona" component={ BlankPage } />

          <Route exact path="/usuario/usuarios" component={ BlankPage } />
          <Route exact path="/usuario/adiciona" component={ BlankPage } />
          <Route exact path="/usuario/meu-perfil" component={ BlankPage } />
        </Switch>
      </Suspense>
  );
}