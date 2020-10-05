import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

export default function AdicionarFiltro() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Selecionar");
  const [sending, setSending] = useState(false);
  const [erros, setErros] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function handleAdicionaFiltro(e) {
    e.preventDefault();
    if (!title) {
      handleModal(false, "Por favor, digite um titulo para o filtro");
    } else if (!platform || platform === 'Selecionar') {
      handleModal(false, "Por favor, escolha plataforma para o filtro");
    }else {
      setSending(true);
      api
        .post("filters", { title, platform })
        .then((res) => {
          console.log(res.data);
          setTitle("");
          setPlatform("");
          setSending(false);
          handleModal(true);
        })
        .catch((err) => {
          console.error(err);
          setSending(false);
          handleModal(false);
        });
    }
  }

  function handleModal(
    sucess,
    msg = "Falha ao salvar o filtro. Tente novamente"
  ) {
    if (sucess) {
      setMensagem("Filtro salvo com sucesso");
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
      history.push("/filtros");
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {/* <p className="card-description"> Basic form elements </p> */}
              <form className="forms-sample">
                <div className="row">
                  <div div className="col-md-6">
                    <Form.Group>
                      <label htmlFor="emailInput">Nome</label>
                      <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="emailInput"
                        disabled={sending}
                        placeholder="Digite o nome do filtro"
                      />
                    </Form.Group>
                  </div>
                  <div div className="col-md-6">
                    <Form.Group>
                        <label htmlFor="plataformaInput">Plataforma</label>
                        <select
                          name="tipo"
                          value={platform}
                          onChange={e => setPlatform(e.target.value)}
                          className="form-control"
                          id="plataformaInput"
                          disabled={sending}
                        >
                          <option>Selecionar</option>
                          <option>Facebook</option>
                          <option>Instagram</option>
                        </select>
                    </Form.Group>
                  </div>
                </div>
                {sending ? (
                  <button
                    disabled={sending}
                    type="submit"
                    className="btn btn-primary mr-2"
                  >
                    Enviando
                  </button>
                ) : (
                  <button
                    onClick={handleAdicionaFiltro}
                    type="submit"
                    className="btn btn-primary mr-2"
                  >
                    Salvar
                  </button>
                )}
                {!sending && (
                  <button
                    onClick={() => history.push("/filtros")}
                    className="btn btn-light"
                  >
                    Cancelar
                  </button>
                )}
              </form>
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