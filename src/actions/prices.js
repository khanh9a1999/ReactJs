import { GET_LIST_ALL_PRICES_SUCCESS, SET_VALUES_INPUT_PRICES_GTE, SET_VALUES_INPUT_PRICES_LTE, GET_LIST_PRICES_FILTED, GET_LIST_ALL_PRICES_ERROR, GET_LIST_PRICES_SAGA } from "../constants/constants"

export const getListAllPricesSuccess = (payload) => ({
    type: GET_LIST_ALL_PRICES_SUCCESS,
    payload
})

export const getListAllPricesError = (payload) => ({
    type: GET_LIST_ALL_PRICES_ERROR,
    payload
})

export const getListPricesSaga = (payload) => ({
    type: GET_LIST_PRICES_SAGA,
    payload
})

export const getListPricesFilted = (payload) => ({
    type: GET_LIST_PRICES_FILTED,
    payload
})

export const setValuesInputPricesGte = (payload) => ({
    type: SET_VALUES_INPUT_PRICES_GTE,
    payload
})

export const setValuesInputPricesLte = (payload) => ({
    type: SET_VALUES_INPUT_PRICES_LTE,
    payload
})
