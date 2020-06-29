import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Solucoes from './pages/Solucoes'
import Clientes from './pages/Clientes'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solucoes" exact component={Solucoes} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/sobre-nos" exact component={Sobre} />
      </Switch>
    </BrowserRouter>
  )
}