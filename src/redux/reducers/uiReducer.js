import { SET_ERRORS, CLEAR_ERRORS, SET_SUCESS, LOADING_UI } from '../types';

const initialState = {
  loading: false,
  sucess: false,
  errors: null
}

export default function(state = initialState, action){
  switch (action.type){
    case SET_ERRORS:
      return{
        ...state,
        sucess: false,
        loading: false,
        errors: action.payload
      };
    case SET_SUCESS:
      return{
        ...state,
        sucess: action.payload
      };
    case CLEAR_ERRORS:
      return{
        ...state,
        loading: false,
        sucess: true,
        errors: null
      };
    case LOADING_UI:
      return{
        ...state,
        loading: true
      };
    default:
      return state
  }
}