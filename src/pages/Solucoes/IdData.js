import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NossosProdutos from '../../components/NossosProdutos'
import produtos from '../../data/ProductFeature'


export default function IdData() {

  return(
    <div>
      <Header/>
        <div class="main-content">
          <section class="iq-breadcrumb">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="text-white mb-3">IDDATA</h2>
                  <nav aria-label="breadcrumb" >
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">IDDATA</li>
                    </ol>
                  </nav>
                </div>
                  <div class="col-lg-6 d-flex justify-content-end breadcrumb-image">
                  <img src={require('../../assets/images/solution/IDDATA.webp')} class="img-fluid" alt="images"></img>
                </div>
              </div>
            </div>
          </section>
          <section class="iq-challanges ">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="col-lg-8 iq-rmt-50">
                        <p class="mb-3">Atenção, saiba como desbloquear REP IDDATA clicando no botão abaixo.</p>
                        <a class="btn btn-primary mb-3" target="_blank" href="https://produto.mercadolivre.com.br/MLB-1586267852-chave-de-desbloqueio-de-rep-iddata-_JM?quantity=1">Desbloqueio de REP IDDATA</a>
                     </div>
                    <div class="col-lg-8 iq-rmt-50">
                      <h3 class="blog-title iq-fw-8 mt-3 mb-3">Informações importantes para empresas que possuem o REP IDDATA</h3>
                      <p class="mb-3">Muitas empresas em todo o Brasil têm tentado localizar o fabricante ID DATA para solicitar suporte. Nós, da VSE Tecnologia, também fizemos o mesmo. Pesquisamos em diversos endereços na internet e números de telefone. A conclusão é que este fabricante encerrou suas atividades.</p>
                      <p class="mb-4">Também tentamos localizar técnicos que pudessem fornecer informações sobre manutenção, operação ou desbloqueio deste REP. Infelizmente não tivemos êxito.</p>
                    </div>
                    <div class="col-lg-8 iq-rmt-50">
                      <p class="mb-3">Desta maneira, para auxiliar clientes e prestadores de serviços que fazem o controle de ponto com este tipo de equipamento, disponibilizamos o nosso software PHPonto (www.visaose.com.br/suporte/InstaladorVSE.exe) para fazer a coleta das marcações e, se for o caso, cadastrar os funcionários e fazer o processamento do ponto.</p>
                      <p class="mb-4">Caso desejem receber uma proposta para substituição deste equipamento por um REP de algum dos fabricantes que trabalhamos, basta nos solicitar por e-mail ou números de whatsapp listados abaixo.</p>
                    </div>
                    <div class="col-lg-8 iq-rmt-50">
                      <p class="mb-3">Caso sua empresa preste serviços de controle e ponto e deseje ser cadastrada como revenda autorizada da VSE Tecnologia, clique no link abaixo e faça seu cadastro.</p>
                    </div>
                  </div>
               </div>
               <div class="row justify-content-md-left">
                  <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 ">
                     <div class="text-center">
                        <div class="iq-challange-img">
                           <img src={require('../../assets/images/payment/cards.png')}  class="img-fluid mb-2" alt=""></img>
                        </div>
                        <div class="info-box mb-4 ">
                          <a class="button mt-3" target="_blank" href="https://artu41.wixsite.com/vsetecnologia2/cadastro" class="link-button">Quero ser revenda da VSE Tecnologia</a>
                        </div>
                        <div class="info-box ">
                           <h6 class="mb-2">Mais informações em:</h6>
                           <p>WhatsApp: (21) 96602-6707 / (87) 99666-3666</p>
                           <p>e-mail: suporte@vsetecnologia.com.br</p>

                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
          <NossosProdutos produtos={produtos} />
        </div>
      <Footer/>
    </div>
  )
}
