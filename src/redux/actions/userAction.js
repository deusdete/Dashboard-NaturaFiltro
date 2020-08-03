import { SET_USER, SET_ERRORS, CLEAR_ERRORS, SET_SUCESS, LOADING_UI, LOADING_USER, SET_UNAUTHENTICATEED } from '../types'
import api from '../../services/api';

export const loginUser =  (userData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/login', userData)
  .then(res => {
    console.log(res.data)
    setAuthorizatonHeader(res.data.idRevenda)
    setUserInfo(res.data)
    dispatch({
      type: SET_USER,
      payload: res.data
    })
    dispatch({type: CLEAR_ERRORS});
    history.push('/dashboard')
  })
  .catch(err => {
    console.error('message', err.message)
    if(err.message === 'Network Error'){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de conexão. Por favor, tente novametne mais tarde." }
      })
    }else if(err.status === 500){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de servidor. Por favor, tente novametne mais tarde." }
      })
    }else{
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    }
  })
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('F4IdRevenda');
  localStorage.removeItem('F4User');
  dispatch({type: SET_UNAUTHENTICATEED})
}

export const signupUser =  (newUserData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/registro', newUserData)
  .then(res => {
    // setAuthorizatonHeader(res.data.idRevenda)
    console.log(res.data)
    dispatch({type: CLEAR_ERRORS});
    history.push('/')
  })
  .catch(err => {
    console.error(err.message)
    if(err.message === 'Network Error'){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de conexão. Por favor, tente novametne mais tarde." }
      })
    }else if(err.status === 500){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de servidor. Por favor, tente novametne mais tarde." }
      })
    }else{
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    }
  })
}

export const getUserData = () => (dispatch) => {

  console.log('login...')
  dispatch({type: LOADING_USER});
  const _user = localStorage.F4User
  if(_user){
    const userData = JSON.parse(_user)
    console.log('userData', userData)
    dispatch({
      type: SET_USER,
      payload: userData
    })
  }else{
    dispatch({
      type: SET_ERRORS,
      payload: { geral: "Sem usuário" }
    })
  }
}
  

const setAuthorizatonHeader = (token) => {
  const F4IdRevenda = `Bearer ${token}`
    localStorage.setItem('F4IdRevenda', F4IdRevenda);
    console.log(F4IdRevenda)
    api.defaults.headers.Authorization  = F4IdRevenda;
}

const setUserInfo = (user) => {
  const F4User = JSON.stringify(user)
    localStorage.setItem('F4User', F4User);
    console.log(F4User)
}

export const sendEmail =  (userData, route)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post(`/email/${route}`, userData)
  .then(res => {
    console.log(res.data)
    dispatch({type: CLEAR_ERRORS});
    dispatch({
      type: SET_SUCESS,
      payload: true,
    })
    return true
  })
  .catch(err => {
    console.error('message', err.response.data)
    if(err.message === 'Network Error'){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de conexão. Por favor, tente novametne mais tarde." }
      })
    }else if(err.status === 500){
      dispatch({
        type: SET_ERRORS,
        payload: { geral: "Erro de servidor. Por favor, tente novametne mais tarde." }
      })
    }else{
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    }
  })
}
