import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

export default function Filtros(props) {
  const history = useHistory();
  const [filtros, setFiltros] = useState(null);
  const [isDeleteCargo, setIdDeleteCargo] = useState("");
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    obterFiltros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function obterFiltros() {
    setLoading(true);
    api
      .get("filters")
      .then((res) => {
        const { filters } = res.data;
        console.log(filters);
        setFiltros(filters);
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

  async function handleApagarFiltro() {
    console.log(isDeleteCargo);
    api
      .delete(`filters/${isDeleteCargo}`)
      .then((res) => {
        console.log(res.data);
        handleCloseModal();
        obterFiltros();
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
              ) : filtros ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Nome </th>
                        <th> Plataforma </th>
                        <th> Criado em </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtros.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.title}</td>
                          <td>{item.platform}</td>
                          <td>{item.createAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h4 className="card-title">Nenhum registos para filtros</h4>
              )}
            </div>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Atenção</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja apagar esse filtros?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleApagarFiltro}>
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