import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SobreComp from '../../components/Sobre'
import Breadcrumb from '../../components/Breadcrumb'
export default function Sobre() {
  return (
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb  title="sobreNos"/>
          <SobreComp/>
        </div>
      <Footer/>
    </div>
  )
}
