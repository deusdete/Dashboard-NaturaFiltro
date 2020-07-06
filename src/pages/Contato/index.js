import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContatoComp from '../../components/Contato'
import Breadcrumb from '../../components/Breadcrumb'
export default function Contato() {
  return (
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="contato"/>
          <ContatoComp/>
        </div>
      <Footer/>
    </div>
  )
}
