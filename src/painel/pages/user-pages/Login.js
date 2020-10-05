import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Spinner, Button  } from 'react-bootstrap';
//Redux
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/userAction'

function  Login(props) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
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
    console.log(email,password)
    props.loginUser({email, password}, props.history)
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
              <h4>Olá, vamos começar </h4>
              <h6 className="font-weight-light">Faça login para continuar.</h6>
              <Form  className="pt-3">
                <Form.Group>
                  {erros.error && 
                    <Form.Control.Feedback style={{display: "block"}} type="invalid">
                      {erros.error}
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
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} 
                    size="lg"
                    isInvalid={!!erros.password} 
                    className="h-auto" />
                  <Form.Control.Feedback type="invalid">
                    {erros.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="mt-3">
                  <Button 
                    onClick={handleSubmit} 
                    className="d-flex btn btn-block btn-primary btn-lg align-items-center justify-content-center font-weight-medium auth-form-btn">
                      {props.UI.loading && <Spinner animation="border" size="sm" style={{marginRight: 5}} variant="light" />}
                      <span>LOGIN</span> 
                    </Button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Mantenha-me conectado
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Esqueceu a senha?</a>
                </div>
              </Form>
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
});
const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login);
