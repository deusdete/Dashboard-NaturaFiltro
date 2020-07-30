import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userAction';

function Login(props) {
  const { t, i18n } = useTranslation();
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  async function handleLogin(e){
    e.preventDefault()
    const userData = {
      email,
      senha
    }
    console.log(userData)
   props.loginUser(userData, props.history);
  }

  return (
    <div>
      <Header/>
        <div class="main-content">
          <Breadcrumb title="Login"/>
          <section class="iq-login-regi">
            <div class="container">
                <div class="row align-items-center d-flex justify-content-center">
                {/* <div class="col-lg-6 col-md-12 col-sm-12">
                  <h2>Login</h2>
                  <p class="mt-3 mb-4 pr-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <h5>You can Login With <i class="fa fa-hand-o-down" aria-hidden="true"></i></h5>
                  <ul class="iq-media mt-3">
                    <li><a href="#" class="fb"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#" class="tw"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" class="gplus"><i class="fab fa-google"></i></a></li>
                    <li><a href="#" class="lkd"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div> */}
                  <div class="col-lg-6 col-md-12 col-sm-12 r-mt3">
                    <div class="iq-login iq-rmt-20">
                      {props.errors && <spam>{props.errors.geral}</spam>}
                      <form>
                        <div class="form-group">
                        {props.errors && <spam>{props.errors.email}</spam>}
                          <input type="email" onChange={e => setEmail(e.target.value)} class="form-control email-bg" id="exampleInputEmail1" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                        {props.errors && <spam>{props.errors.senha}</spam>}
                          <input type="password" onChange={e => setSenha(e.target.value)} class="form-control email-bg" id="exampleInputPassword1" placeholder="Senha"></input>
                        </div>
              <button onClick={handleLogin} class="button">{props.loading && <Spinner animation="border" variant="light" size="sm" />}{t('login')}</button>
                      </form>
                      <div class="row">
                        <div class="col-sm-6">
                        <a href="#" >{t('esqueceuSenha')}</a>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="text-right">
                            <div >Não tem uma conta?</div>
                            <div > <Link to="/registro">Registre-se agora</Link></div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      <Footer/>
    </div>
  )
}

const mapStateToProps =(state) => ({
  loading: state.UI.loading,
  errors: state.UI.errors
})
const mapActionsToProps = {
  loginUser
}
export default connect(mapStateToProps, mapActionsToProps)(Login)
