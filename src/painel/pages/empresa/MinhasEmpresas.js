import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function MinhasEmpresas() {
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
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Imagem </th>
                      <th> Nome </th>
                      <th> Categoria </th>
                      <th> Status </th>
                      <th> Opição </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1">
                        <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                      </td>
                      <td> Agência MV4 </td>
                      <td>
                        Comunicação
                      </td>
                      <td> Ativa </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                            Ação
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Editar</Dropdown.Item>
                            <Dropdown.Item>Marcar como Ativo</Dropdown.Item>
                            <Dropdown.Item>Apagar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require("../../assets/images/faces/face2.jpg")} alt="user icon" />
                      </td>
                      <td> Agência MV4 </td>
                      <td>
                        Comunicação
                      </td>
                      <td> Ativa </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                            Ação
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Editar</Dropdown.Item>
                            <Dropdown.Item>Marcar como Ativo</Dropdown.Item>
                            <Dropdown.Item>Apagar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                      </td>
                      <td> Agência MV4 </td>
                      <td>
                        Comunicação
                      </td>
                      <td> Ativa </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                            Ação
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Editar</Dropdown.Item>
                            <Dropdown.Item>Marcar como Ativo</Dropdown.Item>
                            <Dropdown.Item>Apagar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
