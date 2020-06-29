import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ClienteCompo() {
  const { t, i18n } = useTranslation();
  return (
    <section class="iq-partner" style={{padding: 0}}>
      <div class="container">
          <div class="row">
            <div class="col-sm-12">
                <div class="title-box">
                  <h2 class="title">{t('clientes')}</h2>
                  {/* <p class="sub-title">It is a long established fact that a reader will be distracted.</p>  */}
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="iq-patner-item circle effect6 scale_up ">
                  <div class="img"><img src={require('../../assets/images/partner/01.png')} alt="img"></img></div>
                  <div class="info">
                      <img src={require('../../assets/images/partner/01.png')} alt="img" class="img-fluid mb-3"></img>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="iq-patner-item circle effect6 scale_up ">
                  <div class="img"><img src={require('../../assets/images/partner/02.png')} alt="img"></img></div>
                  <div class="info">
                      <img src={require('../../assets/images/partner/02.png')} alt="img" class="img-fluid mb-3"></img>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="iq-patner-item circle effect6 scale_up ">
                  <div class="img"><img src={require('../../assets/images/partner/03.png')} alt="img"></img></div>
                  <div class="info">
                      <img src={require('../../assets/images/partner/03.png')} alt="img" class="img-fluid mb-3"></img>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="iq-patner-item circle effect6 scale_up ">
                  <div class="img"><img src={require('../../assets/images/partner/05.png')} alt="img"></img></div>
                  <div class="info">
                      <img src={require('../../assets/images/partner/05.png')} alt="img" class="img-fluid mb-3"></img> 
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="iq-patner-item circle effect6 scale_up ">
                  <div class="img"><img src={require('../../assets/images/partner/06.png')} alt="img"></img></div>
                  <div class="info">
                      <img src={require('../../assets/images/partner/06.png')} alt="img" class="img-fluid mb-3"></img>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}
