import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Solucoes from './pages/Solucoes'
import PoloFacil from './pages/Solucoes/PoloFacil'
import Phponto from './pages/Solucoes/Phponto'
import Compacto from './pages/Solucoes/Compacto'
import Gecert from './pages/Solucoes/Gecert'
import Mensageiro from './pages/Solucoes/Mensageiro'
import Clientes from './pages/Clientes'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

import Login from './pages/Login'

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solucoes" exact component={Solucoes} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/sobre-nos" exact component={Sobre} />
        <Route path="/polofacil" exact component={PoloFacil} />
        <Route path="/phponto" exact component={Phponto} />
        <Route path="/compacto" exact component={Compacto} />
        <Route path="/gecert" exact component={Gecert} />
        <Route path="/mensageiro" exact component={Mensageiro} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}