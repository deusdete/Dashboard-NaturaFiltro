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
        "1. Funciona em rede.",
        "2. Cadastro de Usuários e controle de acesso",
        "3.Cadastro de Pessoas (Clientes, Funcionários, Fornecedores)"
      ],
      imagem: "compacto/image_1.webp",
    },
    {
      textos: [
        "4.Cadastro de Transportadoras",
        "5.Cadastro de Vendedores",
        "6.Cadastro de Centro de Custo, Forma de Pagamento e Conta"
      ],
      imagem: "compacto/image_2.webp",
    },
    {
      textos: [
        "7.Contas à Pagar",
        "8.Contas à Receber",
        "9.Livro Caixa",
      ],
      imagem: "compacto/image_3.webp",
    },
    {
      textos: [
        "13.Carnê",
        "14.Cadastro de Produtos",
        "15.Inventário de Estoque",
        "16.Movimentação Física dos Produtos",
        "17.Orçamento",
      ],
      imagem: "compacto/image_4.webp",
    },
    {
      textos: [
        "18.Pedido de Venda",
        "19.Venda de Balcão - PDV - Frente de Loja",
        "20.Compras",
        "21. Pesquisa de notas emitidas contra o CNPJ (Aceitar ou desconhecer).",
        "22. Baixa automática de XML, Leitura de XML de forma ágil (Manifesto, aceitar e desconhecer)",
        "23.Emissão de NFC-e / de NF-E 4.0 / CT-Os / MDF-e / CT-e/Nota Fiscal do Produtor",
        "24. Sped Fiscal / Sped Contribuições / Sintegra",
      ],
      imagem: "compacto/image_5.webp",
    },
    {
      textos: [
        "25.Backup",
        "26.Relatórios;",
        "27. Ordem de Serviço",
        "28. Etiqueta Argox e Zebra",
        "29. Busca dados de empresa pelo CNPJ",
        "30. Tela de delivery",
        "31. SAT",
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
