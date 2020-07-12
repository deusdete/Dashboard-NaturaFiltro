import React from 'react'
import { useTranslation } from 'react-i18next';

export default function SolucoesCompo() {
  const { t, i18n } = useTranslation();
  return (
    <section class="iq-about pt-0">
      <div class="container">
          <div class="row">
            <div class="col-sm-12">
                <div class="title-box">
                  <h2 class="title">{t('nossasSolucoes')}</h2>
                  {/* <p class="sub-title">It is a long established fact that a reader will be distracted.</p> */}
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="iq-services services text-center wow slideInUp" data-wow-duration="0.5s">
                  <div class="iq-icon mb-3">
                      <img src={require('../../assets/images/solution/polofacil-logo.png')} style={{width: 100, heigth: 100}}  class="img-fluid" alt=""></img>
                  </div>
                  <h5 >{t('polofacil')}</h5>
                  <p>{t('polofacil_p1')}</p>
                  {/* <p class="mb-0">Ganhe tempo e matrículas gerenciando de forma rápida, simples e segura, o seu Polo EAD utilizando as ferramentas do PoloFácil. </p> */}
                  <a class="btn btn-primary mt-2" href="/polofacil">{t('saibaMais')}</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="iq-services services text-center wow slideInUp" data-wow-duration="1s">
                  <div class="iq-icon mb-3">
                      <img src={require('../../assets/images/solution/phponto-logo.png')} style={{width: 100, heigth: 100}}  class="img-fluid" alt=""></img>
                  </div>
                  <h5 >{t('phponto')}</h5>
                  <p>{t('phponto_p1')}</p>
                  {/* <p class="mb-0">Eficiência, facilidade de uso e pouco investimento são as principais vantagens do PHPONTO quando o assunto é controle de frequência. </p> */}
                  <a class="btn btn-primary mt-2" href="/phponto">{t('saibaMais')}</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="iq-services services text-center wow slideInUp" data-wow-duration="1s">
                  <div class="iq-icon mb-3">
                      <img src={require('../../assets/images/solution/compact-logo.png')} style={{width: 100, heigth: 100}} class="img-fluid" alt=""></img>
                  </div>
                  <h5 >{t('compact')}</h5>
                  <p>{t('compact_p1')}</p>
                  {/* <p class="mb-0">Eficiência, facilidade de uso e pouco investimento são as principais vantagens do PHPONTO quando o assunto é controle de frequência. </p> */}
                  <a class="btn btn-primary mt-2" href="/compacto">{t('saibaMais')}</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="iq-services services text-center wow slideInUp" data-wow-duration="1s">
                  <div class="iq-icon mb-3">
                      <img src={require('../../assets/images/solution/mensageiro-logo.png')} style={{width: 100, heigth: 100}} class="img-fluid" alt=""></img>
                  </div>
                  <h5 >{t('mensageiro')}</h5>
                  <p>{t('mensageiro_p1')}</p>
                  {/* <p class="mb-0">Eficiência, facilidade de uso e pouco investimento são as principais vantagens do PHPONTO quando o assunto é controle de frequência. </p> */}
                  <a class="btn btn-primary mt-2" href="/mensageiro">{t('saibaMais')}</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="iq-services services text-center wow slideInUp" data-wow-duration="1s">
                  <div class="iq-icon mb-3">
                      <img src={require('../../assets/images/solution/gcert-logo.jpg')} style={{width: 100, heigth: 100}}  class="img-fluid" alt=""></img>
                  </div>
                  <h5 >{t('gcert')}</h5>
                  <p>{t('gcert_p1')}</p>
                  {/* <p class="mb-0">Eficiência, facilidade de uso e pouco investimento são as principais vantagens do PHPONTO quando o assunto é controle de frequência. </p> */}
                  <a class="btn btn-primary mt-2" href="/gecert">{t('saibaMais')}</a>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}
