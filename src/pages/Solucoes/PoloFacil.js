import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductFeature from '../../components/ProductFeature'
import Breadcrumb from '../../components/Breadcrumb'
import NossosProdutos from '../../components/NossosProdutos'
import produtos from '../../data/ProductFeature'


export default function PoloFacil() {

  const features = [
    {
      textos: [
        "controleTutoria",
        "importacaoDados",
        "controleFinazeiro"
      ],
      imagem: "polofacil/image_2.webp",
    },
    {
      textos: [
        "Contas a Parar",
        "Contas a Receber",
        "Controle de Pagamentos do alunos",
        
      ],
      imagem: "polofacil/image_2.webp",
    },
    {
      textos: [
        "Envio de mensagens (WhatsApp, Email, SMS)",
        "Controle de Leads / Candidatos",
        "Funil de vendas",
      ],
      imagem: "polofacil/image_3.webp",
    },
    {
      textos: [
        "Acompanhamento de taxa de evasão",
        "Controle de Rematricula",
        "Cadastro de colaboradores com controle de férias, pagamentos de salários etc",
        "Controle e acompanhamento de assiduidade ao AVA",
        "Diversos relatórios administrativos"
      ],
      imagem: "polofacil/image_4.webp",
    },
    {
      textos: [
        "Importando os contatos do seu Smartphone você elimina a tarefa chata de ficar selecionando os destinatários e enviando aos poucos.",
      ],
      imagem: "polofacil/image_5.webp",
    },
    {
      textos: [
        "Faça como as grandes empresas e apareça para um grande número de pessoas em qualquer lugar.",
        "Envio de: Imagens, Videos, Aquivos e Áudios",
      ],
      imagem: "polofacil/image_6.webp",
    },
  ]
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="polofacil" />
          <ProductFeature features={features} linkCompra={"https://f4cil.mercadoshops.com.br/MLB-1525760788-polofacil-software-para-controle-de-polos-ead-_JM"} />
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}
