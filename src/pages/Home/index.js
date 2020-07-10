import React from 'react'
import { Helmet } from "react-helmet-async";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Solucoes from '../../components/Solucoes'
import Clientes from '../../components/Clientes'

import Breadcrumb from '../../components/Breadcrumb'
import { useTranslation } from 'react-i18next';

export default function Home(){
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header/>
				<Helmet>
					<meta property="og:title" content="Home - F4CIL Soluções em Softwere"></meta>
				</Helmet>
        <Breadcrumb title="home"/>
        <section class="iq-about pt-5 ">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="title-box">
                        <h2 class="title">{t('sobreAF4cil')}</h2>
                     </div>
                  </div>
               </div>
               <div class="row flex-row-reverse">
                  <div class="col-md-6 ">
                     <div class="tips-img text-center ">
                        <img src={require('../../assets/images/Ativo-1@4x.png')} class="img-fluid" alt=""></img>
                     </div>
                  </div>
                  <div class="col-md-6 text-left align-self-center">
                     <div class="iq-rmt-20">
                        <p class="mt-3">{t('sobreAF4cil_p1')}</p>
                        <p class="mt-3">{t('sobreAF4cil_p1')}</p>
                        <a class="button mt-3" href="#">{t('saibaMais')}</a>
                     </div>
                  </div>
               </div>
            </div>
          </section>
          <Solucoes/>
          <section class="iq-features">
            <div class="container">
               <div class="feature1">
                  <div class="row flex-row-reverse">
                     <div class="col-md-6 text-center position-relative">
                        <div class="feature-img ">
                           <img src={require('../../assets/images/solution/polofacil_webview_iphonex.png')} class="img-fluid" alt=""></img>
                        </div>
                        <div class="scrollme">
                           <img src={require('../../assets/images/bg/01.png')} class="img-fluid feature-one animateme"
                              data-when="span"
                              data-from="1"
                              data-to="0"
                              data-translatey="-50" alt="01"></img>
                           <img src={require('../../assets/images/bg/02.png')} class="img-fluid feature-two animateme"
                              alt="02"
                              data-when="exit"
                              data-from="1"
                              data-to="0"
                              data-translatey="-100" alt="image"></img>
                        </div>
                     </div>
                     <div class="col-md-6 text-left align-self-center ">
                        <div class="iq-rmt-20">
                           <h3 class="font-weight-bold text-white">{t('polofacilWeb')}</h3>
                           <p class="mt-3 text-white">{t('polofacilWeb_f_p1')}</p>
                           <p class="mt-3 text-white">{t('polofacilWeb_f_p2')}</p>
                           <a class="button mt-3" href="http://www.polofacil.com.br/">{t('saibaMais')}</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="feature2">
                  <div class="row ">
                     <div class="col-md-6 text-center position-relative">
                        <div class="feature-img ">
                           <img src={require('../../assets/images/solution/banner-n-mobile.png')} class="img-fluid" alt=""></img>                 
                        </div>
                        <div class="scrollme">
                           <img src={require('../../assets/images/bg/01.png')} class="img-fluid feature-one animateme"
                              alt="01"
                              data-when="span"
                              data-from="1"
                              data-to="0"
                              data-translatey="-50" alt="image"></img>
                           <img src={require('../../assets/images/bg/02.png')} class="img-fluid feature-two animateme"
                              alt="02"
                              data-when="exit"
                              data-from="1"
                              data-to="0"
                              data-translatey="-100" alt="image"></img>
                        </div>
                     </div>
                     <div class="col-md-6 text-left align-self-center">
                        <div class="iq-rmt-20">
                           <h3 class="font-weight-bold text-white">{t('meuPhponto')},<br></br>{t('bomEfacil')}</h3>
                           <p class="mt-3 text-white">{t('meuPhponto_f_p1')}</p>
                           <p class="mt-3 text-white">{t('meuPhponto_f_p1')}</p>
                           <a class="button mt-3" href="https://phponto.com.br/">{t('saibaMais')}</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </section>
          <Clientes/>
      <Footer/>
    </>
  );
}