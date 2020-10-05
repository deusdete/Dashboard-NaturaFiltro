import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// import AuthRoute from '../utils/AuthRoute'


import Spinner from './pages/shared/Spinner';

const Dashboard = lazy(() => import('./pages/dashboard'));

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

const Filtros = lazy(() => import('./pages/filtros'));
const AdicionarFiltro = lazy(() => import('./pages/filtros/AdicionarFiltro'));
const QRCodes = lazy(() => import('./pages/qrcodes'));
const AdicioanrQrCode = lazy(() => import('./pages/qrcodes/AdicioanrQrCode'));
const QrScanned = lazy(() => import('./pages/analytics/QrScanned'));


export default function AppRoutes(){
  return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route exact path="/filtros" component={ Filtros } />
          <Route exact path="/filtro/adicionar" component={ AdicionarFiltro } />
          <Route exact path="/qrcodes" component={ QRCodes } />
          <Route exact path="/qrcode/adicionar" component={ AdicioanrQrCode } />
          <Route exact path="/analytics" component={ QrScanned } />
          <Route exact path="/basic-ui/buttons" component={ Buttons } />
          <Route exact path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route exact path="/basic-ui/typography" component={ Typography } />

          <Route exact path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route exact path="/tables/basic-table" component={ BasicTable } />

          <Route exact path="/icons/font-awesome" component={ FontAwesome } />

          <Route exact path="/charts/chart-js" component={ ChartJs } />

          <Route exact path="/login" component={ Login }  />
          

        </Switch>
      </Suspense>
  );
}