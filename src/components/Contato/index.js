import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ContatoComp() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <section class="iq-contactbox">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
              <div class="title-box">
                <h2 class="title">{t('entrarEmContato')}</h2>
                {/* <p class="sub-title">It is a long established fact</p> */}
              </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-12 ">
            <div class="contact-box">
              <p id="result"></p>
              <form class="p-0" id="contact">
                <div class="contact-form mt-4">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="name"  class="form-control contact-first-name" id="name" placeholder={t('primeiroNome')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="name"  class="form-control contact-last-name" id="lastname" placeholder={t('ultimoNome')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="email" class="form-control contact-email" id="email" placeholder={t('seuEmail')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="phone" class="form-control contact-phone" id="phone" placeholder={t('seuTelefone')}></input>
                    </div>
                    <div class="col-lg-12 col-sm-12 mb-3">
                      <textarea class="input-message w-100 contact-message" name="message"  id="message" placeholder={t('digiteSuaMensagem')} rows="5"></textarea>
                    </div>
                      <div class="col-lg-12 col-sm-12 mb-3 text-center">  
                      <button id="submit" name="submit" type="submit" value="Send" class="button pull-right wow fadeInUp contact-us-button" data-wow-duration="1.0s">{t('enviarMensagem')}</button>
                    </div> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class="iq-contact-infobox">
        <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-bg">
                  <h2 class="">{t('contateNos')}</h2>
                  {/* <p class="sub-title">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p> */}
                  <div class="row no-gutters">
                    <div class="col-sm-12">
                      <ul class="iq-contact">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          <p>Rua Julio Câmara, 706<br></br>
                              Centro Afogados da Ingazeira - PE<br></br>
                              CEP: 56800-000<br></br>
                          </p>
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>
                          <p>vendas@vsetecnologia.com.br</p>
                        </li>
                        <li>
                          <i class="fas fa-phone"></i>
                          <p>PE -  +55 (87) 9 9666-3666</p>
                        </li>
                        <li>
                          <i class="fas fa-phone"></i>
                          <p>RJ -  +55 (21) 9 6602-6707</p>
                        </li>
                      </ul>
                      <ul class="info-share ">
                        <li><a href="https://www.facebook.com/vsetecnologia"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://twitter.com/vsetecnologia"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.instagram.com/vsetecnologia/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://pt.linkedin.com/company/vse-tecnologia"><i class="fab fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
