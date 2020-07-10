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
        "Funciona_em_rede",
        "Cadastro_de_Usuários",
        "Cadastro_de_Pessoas"
      ],
      imagem: "compacto/image_1.webp",
    },
    {
      textos: [
        "Cadastro_de_Transportadoras",
        "Cadastro_de_Vendedores",
        "Cadastro_de_Centro_de_Custo"
      ],
      imagem: "compacto/image_2.webp",
    },
    {
      textos: [
        "Contas_à_Pagar",
        "Contas_à_Receber",
        "Livro_Caixa",
      ],
      imagem: "compacto/image_3.webp",
    },
    {
      textos: [
        "Carnê",
        "Cadastro_de_Produtos",
        "Inventário_de_Estoque",
        "Movimentação_Física_dos_Produtos",
        "Orçamento",
      ],
      imagem: "compacto/image_4.webp",
    },
    {
      textos: [
        "Pedido_de_Venda",
        "Venda_de_Balcão",
        "Compras",
        "Pesquisa_de_notas",
        "Baixa_automática_de_XML",
        "Emissão_de_NFCe",
        "Sped_Fiscal",
      ],
      imagem: "compacto/image_5.webp",
    },
    {
      textos: [
        "Backup",
        "Relatórios",
        "Ordem_de_Serviço",
        "Etiqueta",
        "Busca",
        "Tela",
        "SAT",
      ],
      imagem: "compacto/image_6.webp",
    },
  ]
  return(
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="Compacto" />
          <ProductFeature features={features} linkCompra={"https://f4cil.mercadoshops.com.br/MLB-1525291081-compacto-software-comercial-pdv-nf-e-nfc-e-mdf-e-ct-e-_JM"} />
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}
