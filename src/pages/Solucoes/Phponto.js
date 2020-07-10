import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductFeature from '../../components/ProductFeature'
import Breadcrumb from '../../components/Breadcrumb'
import NossosProdutos from '../../components/NossosProdutos'
import produtos from '../../data/ProductFeature'


export default function Phponto() {

  const features = [
    {
      textos: [
        "Desenvolvido",
      ],
      imagem: "phponto/image_1.webp",
    },
    {
      textos: [
        "Por_causa_da_sua_interface",
        
      ],
      imagem: "phponto/image_2.webp",
    },
  ]
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="PHPonto" />
          <ProductFeature features={features} linkCompra={"https://f4cil.mercadoshops.com.br/MLB-1525231416-phponto-software-de-controle-de-ponto-de-funcionarios-_JM"} />
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}
