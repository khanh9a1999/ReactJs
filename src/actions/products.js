import {SET_LOADING, GET_LIST_PRODUCTS_ERROR ,GET_LIST_PRODUCTS_SUCCESS, GET_LIST_PRODUCTS_SAGA} from '../constants/constants';

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  }
}

export const getListProductsSuccess = (payload) => {
  return {
    type: GET_LIST_PRODUCTS_SUCCESS,
    payload,
  }
}

export const getListProductsSaga = (payload) => {
  return {
    type: GET_LIST_PRODUCTS_SAGA,
    payload,
  }
}

export const getListProductsError = (payload) => {
  return {
    type: GET_LIST_PRODUCTS_ERROR,
    payload
  }
}