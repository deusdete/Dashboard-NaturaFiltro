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
        "Para vender bastante você precisa fazer contato com um número enorme de pessoas e empresas e nem sempre o tempo é favorável. Pensando nisso, desenvolvemos um sistema para auxiliar profissionais autônomos e empresas de qualquer tamanho nesta tarefa.",
      ],
      imagem: "mensageiro/image_1.webp",
    },
    {
      textos: [
        "Enquanto você faz outras atividades, o Mensageiro entrega sua propaganda ou mensagem a milhares de pessoas. Você pode enviar diversos anexos como, documentos do Word, planilhas, PDF, imagens, fotos, contatos e tudo que o canal escolhido permitir.",
      ],
      imagem: "mensageiro/image_2.webp",
    },
    {
      textos: [
        "Faça como as grandes empresas e apareça para um grande número de pessoas em qualquer lugar.",
        "Envio de: Imagens, Videos, Aquivos e Áudios"
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
