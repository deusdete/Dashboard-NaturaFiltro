import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
//http://localhost:3333/api
//https://api-f4cil.herokuapp.com/api
export default api;