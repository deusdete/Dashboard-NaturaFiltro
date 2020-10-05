import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

export default function Filtros(props) {
  const history = useHistory();
  const [qrcodes, setQrcodes] = useState(null);
  const [isDeleteCargo, setIdDeleteCargo] = useState("");
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    obterQrCodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.idEmpresa]);

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

  function handleModal(idCargo) {
    setIdDeleteCargo(idCargo);
    setShowModal(true);
  }

  function handleCloseModal() {
    setIdDeleteCargo("");
    setShowModal(false);
  }
  

  async function handleApagarQrCode() {
    console.log(isDeleteCargo);
    api
      .delete(`qrcodes/${isDeleteCargo}`)
      .then((res) => {
        console.log(res.data);
        handleCloseModal();
        obterQrCodes();
      })
      .catch((err) => {
        console.error(err);
        handleCloseModal();
      });
  }

  return (
    <div>
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
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Atenção</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja apagar esse QR Code?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleApagarQrCode}>
              Sim
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
