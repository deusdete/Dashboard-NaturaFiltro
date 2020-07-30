import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userAction';

function Registro(props) {
  const { t, i18n } = useTranslation();
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ razao, setRazao ] = useState('');
  const [ fantasia, setFantasia ] = useState('');
  const [ responsavel, setResponsavel ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ celular, setCelular ] = useState('');
  const initForm = {
   email: '',
   senha: '', 
   confirmaSenha: '',
   razao: '', 
   fantasia: '',
   responsavel: '',
   cnpj: '',   
   cpf: '',  
   telefone: '',
   celular: '',
   cep: '',
   endereco: '',
   bairro: '',
   cidade: '',
   uf: '',
  }
  const [ empresa, setEmpresa ] = useState(initForm)

  function handleChange(e){
    const { name, value } = e.target;
    setEmpresa({...empresa, [name]: value})
  }

  async function handleRegistro(e){
    e.preventDefault()
    console.log(empresa)
    props.signupUser(empresa, props.history);
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
                          {props.errors && <spam>{props.errors.razao}</spam>}
                          <input type="text" name="razao" onChange={handleChange} class="form-control email-bg" id="exampleInputEmail1" placeholder="Razão"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.cnpj}</spam>}
                          <input type="number" name="cnpj" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="CNPJ"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.fantasia}</spam>}
                          <input type="text" name="fantasia" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Fantasia"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.responsavel}</spam>}
                          <input type="text" name="responsavel" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Responsável"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.cpf}</spam>}
                          <input type="number" name="cpf" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="CPF"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.telefone}</spam>}
                          <input type="number" name="telefone" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Telefone"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.celular}</spam>}
                          <input type="number" name="celular" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Celular"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.endereco}</spam>}
                          <input type="text" name="endereco" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Endereço"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.bairro}</spam>}
                          <input type="text" name="bairro" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Bairro"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.cidade}</spam>}
                          <input type="text" name="cidade" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Cidade"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.cep}</spam>}
                          <input type="number" name="cep" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="CEP"></input>
                        </div>
                        <div class="form-group">
                          {props.errors && <spam>{props.errors.uf}</spam>}
                          <input type="text" name="uf" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="UF"></input>
                        </div>
                        <div>
                          {props.errors && <spam>{props.errors.email}</spam>}
                          <input type="email" name="email" onChange={handleChange} class="form-control email-bg" id="exampleInputEmail1" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                        {props.errors && <spam>{props.errors.senha}</spam>}
                          <input type="password" name="senha" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Senha"></input>
                        </div>
                        <div class="form-group">
                        {props.errors && <spam>{props.errors.confirmaSenha}</spam>}
                          <input type="password" name="confirmaSenha" onChange={handleChange} class="form-control email-bg" id="exampleInputPassword1" placeholder="Confirma senha"></input>
                        </div>
                        <button onClick={handleRegistro} class="button">{props.loading && <Spinner animation="border" variant="light" size="sm" />}{t('Enviar')}</button>
                      </form>
                      <div class="row">
                        {/* <div class="col-sm-6">
                        <a href="#" >{t('esqueceuSenha')}</a>
                        </div> */}
                        <div class="col-md-6 col-sm-12">
                          <div class="text-left">
                            <div >Já tem uma conta?</div>
                            <div > <Link to="/login">Faça login agora</Link></div>
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
  signupUser
}
export default connect(mapStateToProps, mapActionsToProps)(Registro)
