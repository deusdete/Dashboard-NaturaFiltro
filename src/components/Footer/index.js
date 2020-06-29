import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer(){
   const { t, i18n } = useTranslation();
  return(
    <footer id="contact" class="iq-footer fshap ">
         <div class="scrollme">
            <img src={require('../../assets/images/bg/02.png')} class="img-fluid footer-one animateme"
               data-when="span"
               data-from="1"
               data-to="0"
               data-translatey="-75" alt="02"></img>
         </div>
         <div class="footer-top ">
            <div class="container">
              {/* <div class="footer-subscribe">
                  <div class="row no-gutters">
                     <div class="col-lg-6 col-md-12">
                        <h4 class= "text-white  mb-3">Subscribe For Newsletter</h4>
                        <p class="text-white mb-0">Sign up with email address to receive news and updates</p>
                     </div>
                     <div class="col-lg-6 col-md-12">
                        <form class="form-inline mb-5 iq-rmt-50">
                           <input type="text" class="form-control subscription-email" placeholder="Email"></input>
                           <a href="JavaScript:Void(0);" class="button subscribe-btn subscription-button">Sign Up</a>
                        </form>
                     </div>
                  </div>
               </div> */}
               <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6 iq-rmb-30">
                     <div class="logo iq-rmt-30">
                        <a href="index.html"><img src={require('../../assets/images/Ativo-2@4x.png')} style={{width: 120}} class="img-fluid" alt="img"></img></a>
                        <div class="mt-3 text-white">Copyrights 2020 &copy;<a href="https://f4cil.com.br/" style={{color: "#fff"}} class="font-weight-bold"> F4CIL </a> </div>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 iq-rmb-30">
                     <h5 class= "text-white  mb-4">{t('menu')}</h5>
                     <ul class="menu">
                        <li><a href="index.html">{t('home')}</a></li>
                        <li><a href="solucoes.html">{t('solucoes')}</a></li>
                        <li><a href="clientes.html">{t('clientes')}</a></li>
                        
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 iq-rmb-30 pl-lg-5">
                     <h5 class= "text-white  mb-4 ">{t('sobreNos')}</h5>
                     <ul class="menu">
                        <li><a href="privacy-policy.html">{t('politicaPrivacidade')}</a></li>
                        <li><a href="contato.html">{t('contato')}</a></li>
                        <li><a href="sobre.html">{t('sobreNos')}</a></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 ">
                     <div class="contact-bg">
                        <h5 class= "text-white iq-rmt-50  mb-4">Contate-Nos</h5>
                        <ul class="iq-contact text-white">
                           <li>                              
                              <a href="tel:0123456789"><i class="fas fa-phone"></i> (21) 96602-6707</a>
                           </li>
                           <li>                             
                              <a href="mailto:xyz@gmail.com"> <i class="fas fa-envelope"></i> vendas@vsetecnologia.com.br</a>
                           </li>
                           <li>
                              <ul class="info-share ">
                                 <li><a href="https://www.facebook.com/vsetecnologia"><i class="fab fa-facebook-square"></i></a></li>
                                 <li><a href="https://twitter.com/vsetecnologia"><i class="fab fa-twitter-square"></i></a></li>
                                 <li><a href="https://www.instagram.com/vsetecnologia/"><i class="fab fa-instagram"></i></a></li>
                                 <li><a href="https://pt.linkedin.com/company/vse-tecnologia"><i class="fab fa-linkedin"></i></a></li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="back-to-top">
            <a class="top" id="top" href="#top"><span>Scroll Up</span> <i class="ion-ios-arrow-thin-up"></i></a>
         </div>

      </footer>
  )
}