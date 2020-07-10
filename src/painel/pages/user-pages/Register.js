import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signupUser } from '../../../redux/actions/userAction'

function Register(props) {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmaSenha, setConfirmaSenha ] = useState('');
  const [ erros, setErros ] = useState({});

  const isFirstRun = useRef(true);
  useEffect(() =>{
    if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
    }
    setErros(props.UI.errors)
  },[props.UI.errors])

  async function handleSubmit(){
    console.log(email,senha, confirmaSenha)
    const newUserData= {
      email, 
      senha, 
      confirmaSenha
    }
    props.signupUser(newUserData,props.history)
  }
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>Novo aqui?</h4>
              <h6 className="font-weight-light">A inscrição é fácil. Leva apenas alguns passos</h6>
              <Form className="pt-3">
                <Form.Group>
                  {erros.geral && 
                    <Form.Control.Feedback style={{display: "block"}} type="invalid">
                    {erros.geral}
                    </Form.Control.Feedback>
                  }
                </Form.Group>
                <Form.Group className="search-field">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    size="lg" 
                    isInvalid={!!erros.email} 
                    className="h-auto" />
                  <Form.Control.Feedback type="invalid">
                    {erros.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="search-field">
                  <Form.Control 
                    type="password" 
                    placeholder="Senha" 
                    onChange={e => setSenha(e.target.value)} 
                    size="lg" 
                    isInvalid={!!erros.senha} 
                    className="h-auto" />
                  <Form.Control.Feedback type="invalid">
                    {erros.senha}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="search-field">
                  <Form.Control 
                    type="email" 
                    placeholder="Confirma senha" 
                    onChange={e => setConfirmaSenha(e.target.value)} 
                    size="lg" 
                    isInvalid={!!erros.confirmaSenha} 
                    className="h-auto" />
                  <Form.Control.Feedback type="invalid">
                    {erros.confirmaSenha}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Eu concordo com todos os Termos e Condições
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <Button 
                    onClick={handleSubmit} 
                    className="d-flex  align-items-center justify-content-center btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >
                    {props.UI.loading && <Spinner animation="border" size="sm" style={{marginRight: 5}} variant="light" />}
                    INSCREVER-SE
                  </Button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Já tem uma conta?<Link to="/user-pages/login-1" className="text-primary">Login</Link>
                </div>
              </Form>
                {/* <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                </div> */}
                {/* <div className="form-group">
                  <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

export default connect(mapStateToProps, { signupUser})(Register)