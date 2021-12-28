import {SET_LOADING, GET_LIST_PRODUCTS_SUCCESS,GET_LIST_PRODUCTS_ERROR} from '../constants/constants';

const INITIAL_STATE = {
  products: [],
  load: false,
  error: null
};


const postsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        load: action.payload,
      };
    case GET_LIST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        load: false,
      };
    case GET_LIST_PRODUCTS_ERROR:
      return {
        ...state,
        load: null,
        error: action.payload,
      }
    default:
      return state;
  }

}

export default postsReducer;