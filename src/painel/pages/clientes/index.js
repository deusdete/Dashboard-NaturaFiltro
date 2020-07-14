import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap';
import TableLoader from '../../components/Placeholderloadings/TableLoader'
import api from '../../../services/api'
export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loadingClientes, setLoadingClientes] = useState(true);
  const [loadingAplicativos, setLoadingAplicativos] = useState(false);
  const [aplicativosErros, setAplicativosErros] = useState(null);
  const [ idRevenda, setIdRevenda ] = useState('');
  const [ apliacativos, setAplicativos ] = useState([])
  
  
  useEffect(() => {
    const _idRevenda = localStorage.getItem('F4IdRevenda')
    setIdRevenda(_idRevenda)
    console.log(idRevenda)
    async function getClientes(){
      let _newData = []
      await api.get('/clientes', {headers: {Authorization: _idRevenda}}).then(res => {
        console.log(res.data)
        const { data } = res;
        Object.keys(data).map((key, cliente ) => {
          console.log(key);
          _newData.push(data[key])
        })
        console.log(_newData);
        setClientes(_newData)
        setLoadingClientes(false)
      }).catch(err => {
        console.error(err)
      })
    }
    getClientes()

  }, [idRevenda])

  async function getAplicativos(idPessoa){
    let _newData = []
    console.log(idRevenda)
    setLoadingAplicativos(true)
    await api.post(`/clientes/${idPessoa}`, {},{headers: {Authorization: idRevenda}}).then(res => {
      console.log(res.data)
      const { data } = res;
      Object.keys(data).map((key ) => {
        console.log(key);
        _newData.push(data[key])
      })
      console.log(_newData);
      setAplicativos(_newData)
      setLoadingAplicativos(false)
    }).catch(err => {
      setAplicativosErros({geral: "Cliente não tem aplicavitos no momento"})
      console.error(err.response.data)
    })
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Empresas</h4>
              {/* <p className="card-description"> Add className <code>.table-striped</code> </p>*/}
              {loadingClientes ? <TableLoader/> :
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Razão </th>
                      <th> CNPF /CPF </th>
                      <th> Telefone </th>
                      {/* <th> Opição </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map(cliente => (
                    <tr onClick={() => getAplicativos(cliente.idCliente)}>
                      <td className="py-1">
                        {cliente.razao}
                      </td>
                      <td> {cliente.cnpj_cpf} </td>
                      <td>  {cliente.fone} </td>
                      {/* <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                            Ação
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Ver Aplicativos</Dropdown.Item>
                            <Dropdown.Item>Alterar</Dropdown.Item>
                            <Dropdown.Item>Apagar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td> */}
                    </tr>))}
                    
                  </tbody>
                </table>
              </div> }
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Empresas</h4>
              {/* <p className="card-description"> Add className <code>.table-striped</code> </p>*/}
              {loadingAplicativos && apliacativos !== null ? <TableLoader/> :
              aplicativosErros ? <h4>{aplicativosErros.geral}</h4> :
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Aplicativo </th>
                      <th> Ativo </th>
                      <th> Data de Cadastro </th>
                      <th> Data de Validade </th>
                      <th> Dispositivo </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apliacativos.map(item => (
                    <tr>
                      <td className="py-1">
                        {item.NomeAplicativo}
                      </td>
                      {item.ativo === true ? (<td>  Sim </td>) : (<td>  Não </td>) }
                      <td>  {item.dataCadastro} </td>
                      <td>  {item.dataValidade} </td>
                      <td>  {item.Dispositivo} </td>
                      {/* <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                            Ação
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Ver Aplicativos</Dropdown.Item>
                            <Dropdown.Item>Alterar</Dropdown.Item>
                            <Dropdown.Item>Apagar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td> */}
                    </tr>))}
                    
                  </tbody>
                </table>
              </div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
