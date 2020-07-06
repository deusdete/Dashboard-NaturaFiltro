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
        "Escolas",
        "Polos EAD",
        "Cursos",
        "Treinamentos",
      ],
      imagem: "gecert/image_1.webp",
    },
    {
      textos: [
        "Funcionamento bastante simples, basta selecionar uma imagem correspondente ao modelo de certificado e importar um arquivo com uma listagem de nomes",
      ],
      imagem: "gecert/image_2.webp",
    },
    {
      textos:[
        "Ideal para quem precisa imprimir vários Certificados de uma vez.",
      ],
      imagem: "gecert/image_3.webp",
    },
    {
      textos:[],
      imagem: "gecert/image_4.webp",
    }
  ]
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="Gecert" />
          <ProductFeature features={features} linkCompra={"https://f4cil.mercadoshops.com.br/MLB-1534147970-gecert-gerador-de-certificados-com-envio-de-e-mails-_JM"} />
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}