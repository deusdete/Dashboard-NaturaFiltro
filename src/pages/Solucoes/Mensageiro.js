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
        "Para_vender_bastante",
      ],
      imagem: "mensageiro/image_1.webp",
    },
    {
      textos: [
        "Enquanto_você",
      ],
      imagem: "mensageiro/image_2.webp",
    },
    {
      textos: [
        "Faça_como_as_grandes_empresas",
        "Envio_de",
      ],
      imagem: "mensageiro/image_3.webp",
    },
    {
      textos: [],
      imagem: "mensageiro/image_4.webp",
    },
    {
      textos: [],
      imagem: "mensageiro/image_5.webp",
    }
  ]
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="Mensageiro" />
          <ProductFeature features={features} linkCompra={"https://f4cil.mercadoshops.com.br/MLB-1506617393-ferramenta-de-vendas-envio-de-whatsapp-e-mails-e-sms-_JM"} />
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}
