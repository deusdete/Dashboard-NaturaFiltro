import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Modal, Button } from 'react-bootstrap'
import { sendEmail } from '../../redux/actions/userAction'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

import { useTranslation } from 'react-i18next';

function FaleF4cil(props) {
  const [ nome, setNome ] = useState('')
  const [ cidade, setCidade ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('')
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(props.sucess){
      setEmail('');
      setNome('');
      setTelefone('');
      setCidade('');
      handleShow()
    }
  }, [props.sucess])

  async function handleContato(e){
    e.preventDefault();
    const data = {
      nome,
      email,
      telefone,
      cidade
    }
    const sucess = await props.sendEmail(data, 'contato');
    if(sucess){
      console.log('Sucesso')
    }else{
      console.log('Falha?')
    }
  }

  return (
    <div>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '574901593200169');
            fbq('track', 'PageView');
          `}
          </script>
          <noscript>
            {`<img height="1" width="1" alt="face" style={{display: "none"}}
          src="https://www.facebook.com/tr?id=574901593200169&ev=PageView&noscript=1"
          />`}
          </noscript>
      </Helmet>
      <Header/>
        <div class="main-content">
          {/* <Breadcrumb title="contato"/> */}
            <section class="iq-contact-infobox" style={{paddingTop: 250}}>
              <div class="container">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="contact-bg">
                        <h2 class="">{t('Obrigado por seu contato')}</h2>
                        <h6 class="">{t('Preencha corretamente seus dados e nós entraremos em contato com você.')}</h6>
                        {/* <p class="sub-title">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p> */}
                      
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="contact-bg">
                        <div class="contact-box">
                        {props.errors && <p style={{color: "#F44336"}} id="result">{props.errors.geral}</p>}
                          <form class="p-0" id="contact">
                            <div class="contact-form mt-4">
                              <div class="row">
                                <div class="col-lg-12 col-sm-12 mb-3">
                                  <input type="text" name="name"  class="form-control contact-first-name" value={nome} onChange={e => setNome(e.target.value)}  id="name" placeholder={t('nomeCompleto')}></input>
                                </div>
                                <div class="col-lg-12 col-sm-12 mb-3">
                                  <input type="text" name="name"  class="form-control contact-last-name" value={email} onChange={e => setEmail(e.target.value)} id="lastname" placeholder={t('seuEmail')}></input>
                                </div>
                                <div class="col-lg-12 col-sm-12 mb-3">
                                  <input type="text" name="email" class="form-control contact-email" value={telefone} onChange={e => setTelefone(e.target.value)} id="email" placeholder={t('seuTelefone')}></input>
                                </div>
                                <div class="col-lg-12 col-sm-12 mb-3">
                                  <input type="text" name="phone" class="form-control contact-phone" value={cidade} onChange={e => setCidade(e.target.value)} id="phone" placeholder={t('suaCidade')}></input>
                                </div>
                                <div class="d-flex col-lg-12 col-sm-12 mb-3 text-center align-items-center justify-content-between" >  
                                <button  id="submit" name="submit" onClick={handleContato} value="Send" class="button wow fadeInUp contact-us-button" data-wow-duration="1.0s">{t('enviar')}</button>
                                <h6 >Ou</h6>
                                <a href={`https://wa.me/5521966026707?text=Ol%C3%A1%2C+meu+nome+%C3%A9+${nome}%2C+minha+cidade+%C3%A9+${cidade}+e+tenho+interesse+nas+solu%C3%A7%C3%B5es+da+f4cil.+%0D%0AMeus+contato%3A+${email}+e+telefone+${telefone}`} target="_blank"><i style={{fontSize: 75, color: "#0a9033"}} class="fa fa-whatsapp"></i></a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email enviando</Modal.Title>
        </Modal.Header>
        <Modal.Body>Parabéns, seu email foi enviado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t('Ok')}
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer/>
    </div>
  )
}
const mapStateToProps = (state) => ({
  errors: state.UI.errors,
  sucess: state.UI.sucess
})

const mapActionsToProps = {
  sendEmail
}
export default connect(mapStateToProps, mapActionsToProps)(FaleF4cil);