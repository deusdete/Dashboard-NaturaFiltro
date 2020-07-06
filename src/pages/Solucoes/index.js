import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SolucoesComp from '../../components/Solucoes'
import Breadcrumb from '../../components/Breadcrumb'

export default function Solucoes() {
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="solucoes" />
          <SolucoesComp/>
        </div>
      <Footer/>
    </div>
  )
}
