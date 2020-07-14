import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333/api"
})
//http://localhost:3333/api
//https://api-f4cil.herokuapp.com/api
export default api;