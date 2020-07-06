import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ClientesComp from '../../components/Clientes'
import Breadcrumb from '../../components/Breadcrumb'

export default function Clientes() {
  return (
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="clientes" />
          <ClientesComp/>
        </div>
      <Footer/>
    </div>
  )
}
