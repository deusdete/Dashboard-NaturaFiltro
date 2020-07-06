import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContatoComp from '../../components/Contato'
import Breadcrumb from '../../components/Breadcrumb'
import LoginComp from '../../components/Login'
export default function Contato() {
  return (
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="Login"/>
          <LoginComp/>
        </div>
      <Footer/>
    </div>
  )
}
