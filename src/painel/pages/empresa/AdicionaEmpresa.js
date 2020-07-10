import React, {useState} from 'react'
import { Tabs, Tab, Form } from 'react-bootstrap'

export default function AdicionaEmpresa() {
  const [key, setKey] = useState('basico');
  return (
    <div>
      {/* <div className="page-header">
        <h3 className="page-title"> Empresas </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Empresas</a></li>
            <li className="breadcrumb-item active" aria-current="page">Todas</li>
          </ol>
        </nav>
      </div> */}
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Empresas</h4>
              {/* <p className="card-description"> Add className <code>.table-striped</code> </p>*/}
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="basico" title="Básico">
                  <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Nome</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Nome" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputEmail2">Descrição</label>
                              <label htmlFor="exampleTextarea1">Textarea</label>
                              <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputMobile">Categoria</label>
                              <select className="form-control">
                                  <option>Hotal</option>
                                  <option>Loja</option>
                                  <option>Calçados</option>
                                  <option>Bares</option>
                                </select>
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="localizacao" title="Localização">
                <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Endereço</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Endereço" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Cidade</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Cidade" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Estado</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Estado" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Latitude</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Latitude" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Longitude</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Longitude" />
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="atributos" title="Atributos" >
                  <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Nome</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Endereço" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputEmail2">Descrição</label>
                              <label htmlFor="exampleTextarea1">Textarea</label>
                              <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputMobile">Categoria</label>
                              <select className="form-control">
                                  <option>Hotal</option>
                                  <option>Loja</option>
                                  <option>Calçados</option>
                                  <option>Bares</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Estado</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Estado" />
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="midia" title="Midia" >
                  <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Nome</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Endereço" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputEmail2">Descrição</label>
                              <label htmlFor="exampleTextarea1">Textarea</label>
                              <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputMobile">Categoria</label>
                              <select className="form-control">
                                  <option>Hotal</option>
                                  <option>Loja</option>
                                  <option>Calçados</option>
                                  <option>Bares</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Estado</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Estado" />
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="horario" title="Horário" >
                  <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Nome</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Endereço" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputEmail2">Descrição</label>
                              <label htmlFor="exampleTextarea1">Textarea</label>
                              <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputMobile">Categoria</label>
                              <select className="form-control">
                                  <option>Hotal</option>
                                  <option>Loja</option>
                                  <option>Calçados</option>
                                  <option>Bares</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputPassword2">Estado</label>
                              <Form.Control type="text" className="form-control" id="exampleInputPassword2"  placeholder="Estado" />
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contato" title="Contato" >
                  <div className="row d-flex justify-content-center justify-content-md-between mt-3 mx-4 mx-xl-5 px-xl-5 flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-sm-12 grid-margin stretch-card">
                      <div className="card" style={{boxShadow: "0 0 0 0"}}>
                        <div className="card-body">                        
                          <form className="forms-sample">
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Wibsite</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Website" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Email</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Email" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Número de telefone</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Número de telefone" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Facebook</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Facebook" />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="exampleInputUsername2">Instagram</label>
                              <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Instagram" />
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="finaliza" title="Finaliza">

                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
