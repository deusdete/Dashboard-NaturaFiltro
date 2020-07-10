import { SET_USER, SET_ERRORS, CLEAR_ERRORS, SET_SUCESS, LOADING_UI, LOADING_USER, SET_UNAUTHENTICATEED } from '../types'
import api from '../../services/api';

export const loginUser =  (userData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/login', userData)
  .then(res => {
    console.log(res.data)
    setAuthorizatonHeader(res.data)
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
  localStorage.removeItem('FBIdToken');
  delete api.defaults.headers.Authorization;
  dispatch({type: SET_UNAUTHENTICATEED})
}

export const signupUser =  (newUserData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/inscreva-se', newUserData)
  .then(res => {
    setAuthorizatonHeader(res.data.token)
    dispatch(getUserData());
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
  dispatch({type: LOADING_USER});
  api.get('/usuario/perfil')
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    })
    .catch(err => {
      console.error(err);
    })
}

const setAuthorizatonHeader = (token) => {
  const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', FBIdToken);
    api.defaults.headers.Authorization  = FBIdToken;
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
