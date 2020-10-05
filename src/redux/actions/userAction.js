import { SET_USER, SET_ERRORS, CLEAR_ERRORS, SET_SUCESS, LOADING_UI, LOADING_USER, SET_UNAUTHENTICATEED } from '../types'
import api from '../../services/api';
import { setAuthorizatonHeader } from '../../utils/auth';

export const loginUser =  (userData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/auth/login', userData)
  .then(res => {
    console.log(res.data)
    const { token, user } = res.data
    setAuthorizatonHeader(token, user)
    dispatch({
      type: SET_USER,
      payload: res.data
    })
    dispatch({type: CLEAR_ERRORS});
    window.location.href = "/";
  })
  .catch(err => {
    console.error('message', err.message)
    if(err.message === 'Network Error'){
      dispatch({
        type: SET_ERRORS,
        payload: { error: "Erro de conexão. Por favor, tente novametne mais tarde." }
      })
    }else if(err.status === 500){
      dispatch({
        type: SET_ERRORS,
        payload: { error: "Erro de servidor. Por favor, tente novametne mais tarde." }
      })
    }else{
      console.log(err.response.data)
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    }
  })
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("_currentUser");
  localStorage.removeItem("_currentUserToken");
  delete api.defaults.headers.Authorization;
  dispatch({ type: SET_UNAUTHENTICATEED });
  window.location.href = "/login";
};

export const signupUser =  (newUserData, history)  => (dispatch) => {
  dispatch({type: LOADING_UI});
  api.post('/registro', newUserData)
  .then(res => {
    // setAuthorizatonHeader(res.data.idRevenda)
    console.log(res.data)
    dispatch({type: CLEAR_ERRORS});
    window.location.href = "/";
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
  const _currentUser = localStorage._currentUser
  console.log(_currentUser)
  if(_currentUser){
    const userData = JSON.parse(_currentUser)
    console.log('userData', userData)
    dispatch({
      type: SET_USER,
      payload: userData
    })
  }else{
    console.log('Sem usuario')
    dispatch({
      type: SET_USER,
      payload: {name: "User"}
    })
  }
}