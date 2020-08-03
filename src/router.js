import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Solucoes from './pages/Solucoes'
import PoloFacil from './pages/Solucoes/PoloFacil'
import Phponto from './pages/Solucoes/Phponto'
import Compacto from './pages/Solucoes/Compacto'
import Gecert from './pages/Solucoes/Gecert'
import Mensageiro from './pages/Solucoes/Mensageiro'
import Clientes from './pages/Clientes'
import Contato from './pages/Contato'
import FaleF4cil from './pages/Contato/FaleF4cil'
import Sobre from './pages/Sobre'

import Login from './pages/Login'
import Registro from './pages/Registro'

import AdminLayout from './painel/layout/Admin'

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solucoes" exact component={Solucoes} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/falef4cil" exact component={FaleF4cil} />
        <Route path="/sobre-nos" exact component={Sobre} />
        <Route path="/polofacil" exact component={PoloFacil} />
        <Route path="/phponto" exact component={Phponto} />
        <Route path="/compacto" exact component={Compacto} />
        <Route path="/gecert" exact component={Gecert} />
        <Route path="/mensageiro" exact component={Mensageiro} />
        <Route path="/login" exact component={Login} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/dashboard" component={AdminLayout} />
        <Route path="/basic-ui/buttons" component={ AdminLayout } />
        <Route path="/basic-ui/dropdowns" component={ AdminLayout } />
        <Route path="/basic-ui/typography" component={ AdminLayout } />

        <Route path="/form-Elements/basic-elements" component={ AdminLayout } />

        <Route path="/tables/basic-table" component={ AdminLayout } />

        <Route path="/icons/font-awesome" component={ AdminLayout } />

        <Route path="/charts/chart-js" component={ AdminLayout } />


        {/* <AuthRoute path="/user-pages/login-1" component={ Login }  />
        <AuthRoute path="/user-pages/register-1" component={ Register1 }/> */}

        <Route path="/user-pages/error-404" component={ AdminLayout } />
        <Route path="/user-pages/error-500" component={ AdminLayout } />

        <Route path="/user-pages/blank-page" component={ AdminLayout } />

        <Route path="/cliente/todas" component={ AdminLayout } />
        <Route path="/usuario/meu-perfil" component={ AdminLayout } />
      </Switch>
    </BrowserRouter>
  )
}