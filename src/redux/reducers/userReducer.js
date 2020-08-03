import { SET_USER, SET_AUTHENTICATED, LOADING_USER, SET_UNAUTHENTICATEED } from '../types'

const initialState = {
  authenticated: false,
  loadind: false,
}

export default function(state = initialState, action){
  switch(action.type){
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
      case SET_UNAUTHENTICATEED:
        return initialState;
      case SET_USER:
        return{
          authenticated: true,
          loading: false,
          ...action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      default:
        return state
  }
}