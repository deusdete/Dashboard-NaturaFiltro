import React from 'react'
import { useTranslation } from 'react-i18next';

export default function SobreComp() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section class="iq-tab horizontal">
      <div class="container">
         <div class="row">
          <div class="col-sm-12">
            <div class="title-box">
              <h2 class="title font-weight-bold">{t('sobreAf4cil')}</h2>
              <p class="sub-title">{t('sobreAf4cil_sub_title')}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-pills tabs-left " id="pills-tab2" role="tablist">
              <li class="nav-item iq-r-mb-15">
                <a class="nav-link active" id="retina1-tab" data-toggle="pill" href="#retina1" role="tab" aria-controls="retina1" aria-selected="true">{t('sobreNos')}</a>
              </li>
              <li class="nav-item iq-r-mb-15">
                <a class="nav-link" id="designs1-tab" data-toggle="pill" href="#designs1" role="tab" aria-controls="designs1" aria-selected="false">{t('nossoCompromisso')}</a>
              </li>
             {/* <li class="nav-item iq-r-mb-15">
                <a class="nav-link" id="customize1-tab" data-toggle="pill" href="#customize1" role="tab" aria-controls="customize1" aria-selected="false">O que somos?</a>
              </li> */}
              
            </ul>

            <div class="tab-content mt-5">
              <div class="tab-pane active" id="retina1">
                <div class="row ">
                <div class="col-lg-6 col-md-6 iq-mb-30">
                    <img src={require('../../assets/images/about/GostamosDeGente.png')} class="img-fluid " alt=""></img>
                  </div>
                  <div class="col-lg-6  col-md-6 text-left align-self-center">
                    
                    <h3 class="font-weight-bold">{t('sobreNos')}</h3>
                    <p class="mt-4"></p>
                    <p>{t('sobre_p1')}</p>
                    <p>{t('sobre_p2')}</p> 
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="designs1">
                <div class="row flex-row-reverse">
                  <div class="col-lg-6 col-md-6 iq-mb-30">
                    <img src={require('../../assets/images/about/NossoCompromisso.jpeg')} class="img-fluid " alt=""></img>
                  </div>
                  <div class="col-lg-6 col-md-6 text-left align-self-center">
                   
                    <h3 class="font-weight-bold">{t('Nosso_compromisso')}</h3>
            <p class="mt-4">{t('Nosso_compromisso_p1')}</p>
            <p>{t('Nosso_compromisso_p2')}</p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="customize1">
                <div class="row ">
                  <div class="col-lg-6 col-md-6 iq-mb-30">
                    <img src={require('../../assets/images/about/NossoCompromisso.jpeg')} class="img-fluid " alt=""></img>
                  </div>
                  <div class="col-lg-6 col-md-6 text-left align-self-center">
                   
                    <h3 class="font-weight-bold">What We Are?</h3>
                   <p class="mt-4">Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.orem quis bibendum auctor.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
        <section class="iq-history main-bg">
         
          <div class="container">

             <div class="row">
                  <div class="col-sm-12">
                     <div class="title-box">
                        <h2 class="title text-white">{t('Nossa_História')}</h2>
                        {/* <p class="sub-title text-white">It is a long established fact that.</p> */}
                     </div>
                  </div>
               </div>
            <div class="row">
              <div class="col-sm-12">
              <div class="cd-horizontal-timeline">
                <div class="timeline">
                  <div class="events-wrapper">
                    <div class="events">
                      <ol>
                        <li><a href="#" data-date="05/01/2014" class="selected">Jan 2008</a></li>
                        <li><a href="#" data-date="16/02/2014" >2009</a></li>
                        <li><a href="#" data-date="16/03/2014" >2010</a></li>
                        <li><a href="#" data-date="16/04/2014" >2011</a></li>
                        <li><a href="#" data-date="16/05/2014" >2012</a></li>
                        <li><a href="#" data-date="16/06/2014" >2013</a></li>
                        <li><a href="#" data-date="16/07/2014" >2014</a></li>
                        <li><a href="#" data-date="16/08/2014" >2015</a></li>
                        <li><a href="#" data-date="16/09/2014" >2016</a></li>
                        <li><a href="#" data-date="16/10/2014" >2017</a></li>
                        <li><a href="#" data-date="16/11/2014" >2018</a></li>
                        <li><a href="#" data-date="16/12/2014" >2019</a></li>
                        <li><a href="#" data-date="16/01/2015" >2020</a></li>
                      </ol>
                      <span class="filling-line" aria-hidden="true"></span>
                    </div>
                  </div>
                  
                  <ul class="cd-timeline-navigation">
                    <li><a href="#" class="prev inactive">Voltar</a></li>
                    <li><a href="#" class="next">Próximo</a></li>
                  </ul>
                </div>
                <div class="events-content">
                  <ol>
                    <li class=" selected " data-date="05/01/2014" >
                      <h3 class="iq-fw-8 mb-3">{t('Nossa_História_Inicio')}</h3>
                      <p class="mb-0">{t('Nossa_História_Inicio_p1')}</p>
            <p class="mb-0">{t('Nossa_História_Inicio_p2')}</p>
                    </li>
                    <li  data-date="16/02/2014" >
                     <h3 class="iq-fw-8 mb-3">2009</h3>
            <p class="mb-0">{t('Nossa_História_2009')}</p>
                     <p class="mb-0">{t('Nossa_História_2009_p1')}</p>
                   </li>
                   <li  data-date="16/03/2014" >
                     <h3 class="iq-fw-8 mb-3">2010</h3>
            <p class="mb-0">{t('Nossa_História_2010')}</p>
            <p class="mb-0">{t('Nossa_História_2010_p1')}</p>
                   </li>
                   <li  data-date="16/04/2014" >
                     <h3 class="iq-fw-8 mb-3">2011</h3>
            <p class="mb-0">{t('Nossa_História_2011')}</p>
                   </li>
                   <li  data-date="16/05/2014" >
                     <h3 class="iq-fw-8 mb-3">2012</h3>
            <p class="mb-0">{t('Nossa_História_2012')}</p>
                   </li>
                   <li  data-date="16/06/2014" >
                     <h3 class="iq-fw-8 mb-3">2013</h3>
            <p class="mb-0">{t('Nossa_História_2013')}</p>
                   </li>
                   <li  data-date="16/07/2014" >
                     <h3 class="iq-fw-8 mb-3">2014</h3>
            <p class="mb-0">{t('Nossa_História_2014')}</p>
                   </li>
                   <li  data-date="16/08/2014" >
                     <h3 class="iq-fw-8 mb-3">2015</h3>
                     <p class="mb-0">{t('Nossa_História_2015')}</p>
                     <p class="mb-0">{t('Nossa_História_2015_p1')}</p>
                  </li>
                  <li  data-date="16/09/2014" >
                     <h3 class="iq-fw-8 mb-3">2016</h3>
                     <p class="mb-0">{t('Nossa_História_2016')}</p>
                   </li>
                   <li  data-date="16/10/2014" >
                     <h3 class="iq-fw-8 mb-3">2017</h3>
                     <p class="mb-0">{t('Nossa_História_2017')}</p>
                   </li>
                   <li  data-date="16/11/2014" >
                     <h3 class="iq-fw-8 mb-3">2018</h3>
                     <p class="mb-0">{t('Nossa_História_2018')}</p>
                   </li>
                   <li  data-date="16/12/2014" >
                     <h3 class="iq-fw-8 mb-3">2019</h3>
                     <p class="mb-0">{t('Nossa_História_2019')}</p>
                     <p class="mb-0">{t('Nossa_História_2019_p1')}</p>
                  </li>
                   <li  data-date="16/01/2015" >
                     <h3 class="iq-fw-8 mb-3">2020</h3>
                     <p class="mb-0">{t('Nossa_História_2020')}</p>
                     <p class="mb-0">{t('Nossa_História_2020_p1')}</p>
                  </li>
                  </ol>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" class="">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="title-box">
            <h2 class="title font-weight-bold text-black">{t('Nosso_Time')}</h2>
                  <p class="sub-title">{t('Nosso_Time_p1')}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="owl-carousel"  data-autoPlay="true" data-loop="true" data-nav="false" data-dots="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
              <div class="item">
                <div class="iq-team  wow slideInUp" data-wow-duration="1s">
                  <div class="iq-team-img">
                    <img src={require('../../assets/images/team/artur-perfil.jpg')} class="img-fluid center-block" alt="#"></img>
                  </div>
                  <div class="iq-team-info text-center">
                    <h5>Luiz Artur</h5>
                    <span class="team-post iq-tw-5">CEO / Administração</span>
                  </div>
                  <div class="share">
                    <ul>
                      <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-google"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="iq-team  wow slideInUp" data-wow-duration="1s">
                  <div class="iq-team-img">
                    <img src={require('../../assets/images/team/marcelino-perfil.jpg')} class="img-fluid center-block" alt="#"></img>
                  </div>
                  <div class="iq-team-info text-center">
                    <h5>José Marcelino</h5>
                    <span class="team-post iq-tw-5">CTO / Marketing</span>
                  </div>
                  <div class="share">
                    <ul>
                      <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-google"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="iq-team  wow slideInUp" data-wow-duration="1s">
                  <div class="iq-team-img">
                    <img src={require('../../assets/images/team/kelly-perfil.jpg')} class="img-fluid center-block" alt="#"></img>
                  </div>
                  <div class="iq-team-info text-center">
                    <h5>Kelly</h5>
                    <span class="team-post iq-tw-5">Financeiro</span>
                  </div>
                  <div class="share">
                    <ul>
                      <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-google"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="iq-team  wow slideInUp" data-wow-duration="1s">
                  <div class="iq-team-img">
                    <img src={require('../../assets/images/team/pedro-perfil.jpg')} class="img-fluid center-block" alt="#"></img>
                  </div>
                  <div class="iq-team-info text-center">
                    <h5>Pedro Mateus</h5>
                    <span class="team-post iq-tw-5">Analista/Desenvolvedor</span>
                  </div>
                  <div class="share">
                    <ul>
                      <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-google"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="iq-team  wow slideInUp" data-wow-duration="1s">
                  <div class="iq-team-img">
                    <img src={require('../../assets/images/team/deusdete-perfil.jpg')} class="img-fluid center-block" alt="#"></img>
                  </div>
                  <div class="iq-team-info text-center">
                    <h5>Deusdete Ferreira</h5>
                    <span class="team-post iq-tw-5">Analista/Desenvolvedor</span>
                  </div>
                  <div class="share">
                    <ul>
                      <li><a href="https://www.facebook.com/deuzinho05"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="https://twitter.com/deuzinhosilva"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/deusdete-ferreira-a76039100/"><i class="fab fa-linkedin"></i></a></li>
                      <li><a href="https://github.com/deusdete"><i class="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>
         <section class="iq-testimonial pt-0">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="title-box">
                        <h2 class="title text-black">{t('Nossos_Clientes')}</h2>
                        <p class="sub-title">{t('Nossos_Clientes_p1')}</p>
                     </div>
                  </div>
               </div>
               <div class="row ">
                  <div class="col-lg-12 col-md-12">
                     <div class="center slick-slider slider justify-content-md-center" >
                       
                           <div class="text-center testimonial">
                              <div class=" big-text mb-5"> <i class="fa fa-quote-right"></i></div>
                              <div class="iq-testimonial-info">
                                      <p class="mb-5">{t('Nossos_Clientes_MAPROTEC')}</p>
                                 <div class="author">
                                    <div class="author-img">
                                       <img src={require('../../assets/images/testimonial/marcio-01.jpg')} alt="img" class="img-fluid"></img>
                                    </div>
                                    <div class="author-info">
                                       <h6 class=" ">Márcio Damasceno</h6>
                                       <span>MAPROTEC ENGENHARIA</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="text-center testimonial">
                              <div class=" big-text mb-5"> <i class="fa fa-quote-right"></i></div>
                              <div class="iq-testimonial-info">
                                  <p class="mb-5">{t('Nossos_Clientes_Cruzeiro')}</p>
                                 <div class="author">
                                    <div class="author-img">
                                       <img src={require('../../assets/images/testimonial/samara-01.jpg')} alt="img" class="img-fluid"></img>
                                    </div>
                                    <div class="author-info">
                                       <h6 class=" ">Samara</h6>
                                       <span>Polo Universidade Cruzeiro do Sul</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="text-center testimonial">
                              <div class=" big-text mb-5"> <i class="fa fa-quote-right"></i></div>
                              <div class="iq-testimonial-info">
                                    <p class="mb-5">{t('Nossos_Clientes_Prefeitura_terra')}</p>
                                 <div class="author">
                                    <div class="author-img">
                                       <img src={require('../../assets/images/testimonial/marcos-01.jpg')} alt="img" class="img-fluid"></img>
                                    </div>
                                    <div class="author-info">
                                       <h6 class=" ">Marcos</h6>
                                       <span>Prefeitura de Terra Nova - PE</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="text-center testimonial">
                              <div class=" big-text mb-5"> <i class="fa fa-quote-right"></i> </div>
                              <div class="iq-testimonial-info">
                                  <p class="mb-5">{t('Nossos_Clientes_Prefeitura_Serrita')}</p>
                                 <div class="author">
                                    <div class="author-img">
                                       <img src={require('../../assets/images/testimonial/flavio-01.jpg')} alt="img" class="img-fluid"></img>
                                    </div>
                                    <div class="author-info">
                                       <h6 class=" ">Flavio</h6>
                                       <span>Prefeitura Municipal de Serrita</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                       
                     </div>
                  </div>
               </div>
            </div>
         </section>

        {/* <section class="iq-blogs position-relative pt-0">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="title-box">
                        <h2 class="title">Our Blog</h2>
                        <p class="sub-title">It is a long established fact that a reader will be distracted.</p>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12">
                     <div class="owl-carousel"  data-autoPlay="true" data-loop="true" data-nav="false" data-dots="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                        <div class="item">
                           <div class="main-blog">
                              <div class="blog-img">
                                 <img src={require('../../assets/images/blog/blog-img1.jpg')} class="img-fluid" alt="image"></img>
                              </div>
                              <div class="blog-detail">
                                 <a href="blog-details-left-sidebar.html">
                                    <h6 class="">Real World Incidents Detected and Stopped by Awake</h6>
                                 </a>
                                 <p class="mb-0">Progravida nibh vel velit auctor alinean sollicitudin.</p>
                                 <div class="blog-info">
                                    <a href=""><img src="images/blog/clients/01.jpg')} class="img-fluid rounded-circle mr-3 user-img" alt="image"></img><span class="font-c iq-font-18">John Deo</span></a>
                                    <ul class="d-inline-block float-right">
                                       <li class="d-inline-block"><a href="#"><i class="far fa-thumbs-up"></i> <span class="">90</span></a></li>
                                       <li class="d-inline-block"><a href="#"><i class="far fa-comment-alt"></i> <span class="">120</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="item">
                           <div class="main-blog">
                              <div class="blog-img">
                                 <img src="images/blog/blog-img2.jpg')} class="img-fluid" alt="image"></img>
                              </div>
                              <div class="blog-detail">
                                 <a href="blog-details-left-sidebar.html">
                                    <h6 class="">The Advent of Advanced Network Traffic Analysis</h6>
                                 </a>
                                 <p class="mb-0">Progravida nibh vel velit auctor alinean sollicitudin.</p>
                                 <div class="blog-info">
                                    <a href=""><img src="images/blog/clients/02.jpg')} class="img-fluid rounded-circle mr-3 user-img" alt="image"></img><span class="font-c iq-font-18">Kips Leo</span></a>
                                    <ul class="d-inline-block float-right">
                                       <li class="d-inline-block"><a href="#"><i class="far fa-thumbs-up"></i> <span class="">90</span></a></li>
                                       <li class="d-inline-block"><a href="#"><i class="far fa-comment-alt"></i> <span class="">120</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="item">
                           <div class="main-blog">
                              <div class="blog-img">
                                 <img src="images/blog/blog-img3.jpg')} class="img-fluid" alt="image"></img>
                              </div>
                              <div class="blog-detail">
                                 <a href="blog-details-left-sidebar.html">
                                    <h6 class="">EMA Top 3 Report and Decision Guide for Security </h6>
                                 </a>
                                 <p class="mb-0">Progravida nibh vel velit auctor alinean sollicitudin.</p>
                                 <div class="blog-info">
                                    <a href=""><img src="images/blog/clients/03.jpg')} class="img-fluid rounded-circle mr-3 user-img" alt="image"></img><span class="font-c iq-font-18">Glen Jax </span></a>
                                    <ul class="d-inline-block float-right">
                                       <li class="d-inline-block"><a href="#"><i class="far fa-thumbs-up"></i> <span class="">90</span></a></li>
                                       <li class="d-inline-block"><a href="#"><i class="far fa-comment-alt"></i> <span class="">120</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="item">
                           <div class="main-blog">
                              <div class="blog-img">
                                 <img src="images/blog/blog-img1.jpg')} class="img-fluid" alt="image"></img>
                              </div>
                              <div class="blog-detail">
                                 <a href="blog-details-left-sidebar.html">
                                    <h6 class="">Real World Incidents Detected and Stopped by Awake</h6>
                                 </a>
                                 <p class="mb-0">Progravida nibh vel velit auctor alinean sollicitudin.</p>
                                 <div class="blog-info">
                                    <a href=""><img src="images/blog/clients/04.jpg')} class="img-fluid rounded-circle mr-3 user-img" alt="image"></img><span class="font-c iq-font-18">JD Scot</span></a>
                                    <ul class="d-inline-block float-right">
                                       <li class="d-inline-block"><a href="#"><i class="far fa-thumbs-up"></i> <span class="">90</span></a></li>
                                       <li class="d-inline-block"><a href="#"><i class="far fa-comment-alt"></i> <span class="">120</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="item">
                           <div class="main-blog">
                              <div class="blog-img">
                                 <img src="images/blog/blog-img2.jpg')} class="img-fluid" alt="image"></img>
                              </div>
                              <div class="blog-detail">
                                 <a href="blog-details-left-sidebar.html">
                                    <h6 class="">The Advent of Advanced Network Traffic Analysis</h6>
                                 </a>
                                 <p class="mb-0">Progravida nibh vel velit auctor alinean sollicitudin.</p>
                                 <div class="blog-info">
                                    <a href=""><img src="images/blog/clients/02.jpg')} class="img-fluid rounded-circle mr-3 user-img" alt="image"></img><span class="font-c iq-font-18">Nils Leo</span></a>
                                    <ul class="d-inline-block float-right">
                                       <li class="d-inline-block"><a href="#"><i class="far fa-thumbs-up"></i> <span class="">90</span></a></li>
                                       <li class="d-inline-block"><a href="#"><i class="far fa-comment-alt"></i> <span class="">120</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
    </>
  )
}
