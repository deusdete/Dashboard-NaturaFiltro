import React, { useState,useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

export default function AdicioanrQrCode() {
  const history = useHistory();
  const [filtros, setFiltros] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [filter, setFilter] = useState("Selecionar");
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState(false);
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

  async function handleAdicionaQrCode(e) {
    e.preventDefault();
    console.log({title, filter, url })
    if (!title) {
      handleModal(false, "Por favor, digite um titulo para o QR COde");
    } else if (!filter || filter === 'Selecionar') {
      handleModal(false, "Por favor, selecione um filtro");
    }else if (!url) {
      handleModal(false, "Por favor, insira um link para o QR Code");
    }else {
      setLoading(true);
      api
        .post("qrcodes", { title, filter, url })
        .then((res) => {
          console.log(res.data);
          setTitle("");
          setFilter("Selecionar");
          setUrl("");
          setLoading(false);
          handleModal(true);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          handleModal(false);
        });
    }
  }

  function handleModal(
    sucess,
    msg = "Falha ao salvar ao criar QR Code. Tente novamente"
  ) {
    if (sucess) {
      setMensagem("QR Code criando com com sucesso");
    } else {
      setErros(true);
      setMensagem(msg);
    }
    setShowModal(true);
  }

  function handleCloseModal() {
    if (erros) {
      setShowModal(false);
      setErros(false);
    } else {
      history.push("/qrcodes");
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {/* <p className="card-description"> Basic form elements </p> */}
              {loading ? (
                <h4 className="card-title">Carregando</h4>
              ) : filtros ? (
              <form className="forms-sample">
                <div className="row">
                  <div div className="col-md-4">
                    <Form.Group>
                      <label htmlFor="emailInput">Titulo</label>
                      <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="emailInput"
                        placeholder="Digite um titulo"
                      />
                    </Form.Group>
                  </div>
                  <div div className="col-md-4">
                    <Form.Group>
                      <label htmlFor="emailInput">Link</label>
                      <Form.Control
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        type="text"
                        className="form-control"
                        id="emailInput"
                        placeholder="Digite coloque aqui um link"
                      />
                    </Form.Group>
                  </div>
                  <div div className="col-md-4">
                    <Form.Group>
                        <label htmlFor="plataformaInput">Filtro</label>
                        <select
                          name="tipo"
                          value={filter}
                          onChange={e => setFilter(e.target.value)}
                          className="form-control"
                          id="plataformaInput"
                          disabled={loading}
                        >
                          <option>Selecionar</option>
                          {filtros.map((item, idx) => 
                            <option key={idx} value={item._id} >{item.title}</option>
                          )}
                        </select>
                    </Form.Group>
                  </div>
                </div>
                {loading ? (
                  <button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary mr-2"
                  >
                    Enviando
                  </button>
                ) : (
                  <button
                    onClick={handleAdicionaQrCode}
                    type="submit"
                    className="btn btn-primary mr-2"
                  >
                    Salvar
                  </button>
                )}
                {!loading && (
                  <button
                    onClick={() => history.push("/qrcodes")}
                    className="btn btn-light"
                  >
                    Cancelar
                  </button>
                )}
              </form>) : (
                <h4 className="card-title">Algo deu errado ao carregar os filtros</h4>
              )}
            </div>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Mensagem</Modal.Title>
          </Modal.Header>
          <Modal.Body>{mensagem}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}