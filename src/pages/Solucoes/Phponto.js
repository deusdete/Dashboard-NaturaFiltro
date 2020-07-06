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
        "Desenvolvido para atender na íntegra a Portaria 1510 do Ministério do Trabalho e Emprego, o PHPONTO oferece ao gestor de Recursos Humanos uma excelente ferramenta de gerenciamento do Ponto.",
      ],
      imagem: "phponto/image_1.webp",
    },
    {
      textos: [
        "Por causa da sua interface (telas) limpa e compreensível, o operador aprende rapidamente todas as funções do software, reduzindo bastante o tempo de assimilação e a necessidade de novos treinamentos. Isto significa economia de tempo e dinheiro.",
        
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
