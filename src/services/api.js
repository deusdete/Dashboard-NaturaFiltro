import axios from 'axios';

const api = axios.create({
  baseURL: "https://api-f4cil.herokuapp.com/api"
})

export default api;