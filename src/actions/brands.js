import { GET_LIST_ALL_BRANDS_SUCCESS,SET_CHECKED_BRANDS, GET_LIST_BRANDS_FILTED, GET_LIST_ALL_BRANDS_ERROR, GET_LIST_BRANDS_SAGA } from "../constants/constants"

export const getListAllBrandsSuccess = (payload) => ({
    type: GET_LIST_ALL_BRANDS_SUCCESS,
    payload
})

export const getListAllBrandsError = (payload) => ({
    type: GET_LIST_ALL_BRANDS_ERROR,
    payload
})

export const getListBrandsSaga = (payload) => ({
    type: GET_LIST_BRANDS_SAGA,
    payload
})

export const getListBrandsFilted = (payload) => ({
    type: GET_LIST_BRANDS_FILTED,
    payload
})

export const setCheckedBrands = (payload) => ({
    type: SET_CHECKED_BRANDS,
    payload
})