import React, { useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap'
import { sendEmail } from '../../redux/actions/userAction'
import { connect } from 'react-redux'

function ContatoComp(props) {
  const { t, i18n } = useTranslation();
  const [ nome, setNome ] = useState('')
  const [ ultimoNome, setUltimoNome ] = useState('')
  const [ mensagem, setMensagem ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(props.sucess){
      setEmail('');
      setNome('');
      setUltimoNome('');
      setTelefone('');
      setMensagem('');
      handleShow()
    }
  }, [props.sucess])

  async function handleContato(e){
    e.preventDefault();
    const data = {
      nome,
      ultimoNome,
      email,
      telefone,
      mensagem
    }
    const sucess = await props.sendEmail(data, 'contato-padrao');
    if(sucess){
      console.log('Sucesso')
    }else{
      console.log('Falha?')
    }
  }
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
              {props.errors && <p style={{color: "#F44336"}} id="result">{props.errors.geral}</p>}
              <form class="p-0">
                <div class="contact-form mt-4">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="name"  class="form-control contact-first-name" value={nome} onChange={e => setNome(e.target.value)}  id="name" placeholder={t('primeiroNome')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="name"  class="form-control contact-last-name" value={ultimoNome} onChange={e => setUltimoNome(e.target.value)} id="lastname" placeholder={t('ultimoNome')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="email" class="form-control contact-email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder={t('seuEmail')}></input>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-3">
                      <input type="text" name="phone" class="form-control contact-phone" value={telefone} onChange={e => setTelefone(e.target.value)}  id="phone" placeholder={t('seuTelefone')}></input>
                    </div>
                    <div class="col-lg-12 col-sm-12 mb-3">
                      <textarea class="input-message w-100 contact-message" name="message" value={mensagem} onChange={e => setMensagem(e.target.value)}   id="message" placeholder={t('digiteSuaMensagem')} rows="5"></textarea>
                    </div>
                      <div class="col-lg-12 col-sm-12 mb-3 text-center">  
                      <button onClick={handleContato}  name="submit" type="submit" value="Send" class="button pull-right wow fadeInUp contact-us-button" data-wow-duration="1.0s">{t('enviarMensagem')}</button>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{t('emailEnviado')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('parabensEmailEnviado')}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t('Ok')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => ({
  errors: state.UI.errors,
  sucess: state.UI.sucess
})

const mapActionsToProps = {
  sendEmail
}
export default connect(mapStateToProps, mapActionsToProps)(ContatoComp);
