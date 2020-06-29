import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SobreComp from '../../components/Sobre'
import { useTranslation } from 'react-i18next';

export default function Sobre() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Header/>
      <div class="main-content">
          <section class="iq-breadcrumb">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="text-white mb-3">{t('sobre')}</h2>
                  <nav aria-label="breadcrumb" >
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="index.html">{t('home')}</a></li>
                      <li class="breadcrumb-item active" aria-current="page">{t('sobre')}</li>
                    </ol>
                  </nav>
                </div>
                  <div class="col-lg-6 d-flex justify-content-end breadcrumb-image">
                  {/* <img src="images/breadcrumb/01.png" class="img-fluid" alt="images">  */}
                </div>
              </div>
            </div>
          </section>
          <SobreComp/>
        </div>
      <Footer/>
    </div>
  )
}
