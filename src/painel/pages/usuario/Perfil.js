import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap'

function Perfil(props) {

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12  grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center justify-content-md-between mx-4 mx-xl-5 px-xl-5 flex-wrap">
                <div className="d-flex align-items-center">
                  <img src="https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/faces/profile/profile.jpg" alt="perfil" style={{width: 150, borderRadius: "50%"}} />
                  <div className="wrapper pl-sm-4 mt-4">
                    <div className="d-flex justify-content-between mb-2">
                      <div class="revenue-desc">
                        <h6>Deuzim (Admim)</h6>
                        <p class="font-weight-light"> Desenvoledor e Analista</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-2 mt-md-0">
                  <div class="float-right pr-3 mr-3">
                    <h6 class="mb-0 text-right text-dark">Empresas</h6>
                    <p class="text-right mb-0 text-dark">130</p>
                  </div>
                  <div class="float-left">
                    <h6 class="mb-0 text-left text-dark">Juntou-se em</h6>
                    <p class="text-left mb-0 text-dark">07 de Junho de 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-sm-6  grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <h4 className="card-title">Perfil</h4>
                <button className="btn btn-light">Editar</button>
              </div>
             
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputUsername2">Nome</label>
                  <Form.Control type="text" className="form-control" id="exampleInputUsername2" disabled={true} placeholder="Nome" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail2">Email</label>
                  <Form.Control type="email" className="form-control" id="exampleInputEmail2" disabled={true} placeholder="Email" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputMobile">Telefone</label>
                  <Form.Control type="text" className="form-control" id="exampleInputMobile" disabled={true} placeholder="Telefone" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputPassword2">Função</label>
                  <Form.Control type="text" className="form-control" id="exampleInputPassword2" disabled={true} placeholder="Função" />
                </Form.Group>
                <button type="submit" className="btn btn-primary mr-2">Salvar</button>
                <button className="btn btn-light">Cancelar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
                <h4 className="card-title">Endereço</h4>
                <button className="btn btn-light">Editar</button>
              </div>
             
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputUsername2">Endereço</label>
                  <Form.Control type="text" className="form-control" id="exampleInputUsername2" disabled={true} placeholder="Endereço" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail2">Bairro</label>
                  <Form.Control type="email" className="form-control" id="exampleInputEmail2" disabled={true} placeholder="Bairro" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputMobile">Cidade</label>
                  <Form.Control type="text" className="form-control" id="exampleInputMobile" disabled={true} placeholder="Cidade" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputPassword2">Estado</label>
                  <Form.Control type="text" className="form-control" id="exampleInputPassword2" disabled={true} placeholder="Estado" />
                </Form.Group>
                <button type="submit" className="btn btn-primary mr-2">Salvar</button>
                <button className="btn btn-light">Cancelar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <h4 className="card-title">Planos</h4>
                <button className="btn btn-light">Alterar</button>
              </div>
              <div className="revenue-item">
                <div className="revenue-desc">
                  <h4 className="card-title">Atual</h4>
                  <p className="font-weight-light"> Master </p>
                </div>
                <div className="revenue-desc">
                  <h4 className="card-title">Criado em</h4>
                  <p className="font-weight-light"> 07 de Julho de 2020 </p>
                </div>
                <div className="revenue-desc">
                  <h4 className="card-title">Válido até</h4>
                  <p className="font-weight-light">  07 de Julho de 2021 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  imagemUrl: state.user.imagemUrl,
  nome: state.user.nome,
  telefone: state.user.telefone
})
export default connect(mapStateToProps)(Perfil);