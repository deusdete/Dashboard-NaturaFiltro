import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';


export default function Dashboard (){
  const history = useHistory();
  const [qrcodes, setQrcodes] = useState(null);
  const [isDeleteCargo, setIdDeleteCargo] = useState("");
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [showModal, setShowModal] = useState(false);

  function toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }

  useEffect(() => {
    obterQrCodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function obterQrCodes() {
    setLoading(true);
    api
      .get("qrcodes")
      .then((res) => {
        const { qrcodes } = res.data;
        console.log(qrcodes);
        setQrcodes(qrcodes);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }
  
  return (
    <div>
      {/* <div className="row proBanner">
        <div className="col-12">
          <span className="d-flex align-items-center purchase-popup">
            <p>Like what you see? Check out our premium version for more.</p>
            <a href="https://github.com/BootstrapDash/StarAdmin-Free-React-Admin-Template" target="_blank" rel="noopener noreferrer" className="btn ml-auto download-button">Download Free Version</a>
            <a href="http://www.bootstrapdash.com/demo/star-admin-pro-react/template/demo_1/preview/dashboard" rel="noopener noreferrer" target="_blank" className="btn purchase-button">Upgrade To Pro</a>
            <i className="mdi mdi-close bannerClose" onClick={toggleProBanner}></i>
          </span>
        </div>
      </div> */}
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">Filtros</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">3</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Último em 05/10/2020 </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-receipt text-warning icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">QR Codes Gerados</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">10</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi  mdi-calendar mr-1" aria-hidden="true"></i> Último em 05/10/2020 </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-poll-box text-success icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">Numero de leituras</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">5693</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i>Atualizado as 00:21</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">Links</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">246</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-reload mr-1" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {/* <p className="card-description"> Add className <code>.table-striped</code> </p>*/}
              {loading ? (
                <h4 className="card-title">Carregando</h4>
              ) : qrcodes ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> QR Code</th>
                        <th> Titulo </th>
                        <th> Plataforma </th>
                        <th> Link </th>
                        <th> Ação </th>
                      </tr>
                    </thead>
                    <tbody>
                      {qrcodes.map((item, idx) => (
                        <tr key={idx}>
                          <td className="py-1">
                            {item.data && (
                              <img
                                src={item.data}
                                style={{
                                  borderRadius: 0,
                                  width: 56,
                                  height: 56,
                                }}
                                alt="user icon"
                              />
                            )}
                          </td>
                          <td>{item.title}</td>
                          <td>{item.filter.title}</td>
                          <td>{item.url}</td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                                Ação
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href={item.url} target="_blank">Abrir Link</Dropdown.Item>
                                <Dropdown.Item href={item.data} download={`${item._id}.png`} >Baixar QR Code</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                       <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <h4 className="card-title">Nenhum registos de QR Code</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}