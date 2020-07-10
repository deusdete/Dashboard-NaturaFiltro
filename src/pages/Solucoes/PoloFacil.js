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
        "Contas_a_Parar",
        "Contas_a_Receber",
        "Controle_de_Pagamentos_do_alunos",
        
      ],
      imagem: "polofacil/image_2.webp",
    },
    {
      textos: [
        "Envio_de_mensagens",
        "Controle_de_Leads",
        "Funil de vendas",
      ],
      imagem: "polofacil/image_3.webp",
    },
    {
      textos: [
        "Acompanhamento_de_taxa_de_evasão",
        "Controle_de_Rematricula",
        "Cadastro_de_colaboradores",
        "Controle_e_acompanhamento",
        "Diversos_relatórios"
      ],
      imagem: "polofacil/image_4.webp",
    },
    {
      textos: [
        "Importando_os_contatos",
      ],
      imagem: "polofacil/image_5.webp",
    },
    {
      textos: [
        "Faça",
        "Envio",
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
