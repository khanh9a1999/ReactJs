import { GET_LIST_ALL_TYPES_SUCCESS, SET_CHECKED_TYPES,GET_LIST_TYPES_FILTED, GET_LIST_ALL_TYPES_ERROR, GET_LIST_TYPES_SAGA } from "../constants/constants"

export const getListAllTypesSuccess = (payload) => ({
    type: GET_LIST_ALL_TYPES_SUCCESS,
    payload
})

export const getListAllTypesError = (payload) => ({
    type: GET_LIST_ALL_TYPES_ERROR,
    payload
})

export const getListTypesSaga = (payload) => ({
    type: GET_LIST_TYPES_SAGA,
    payload
})

export const getListTypesFilted = (payload) => ({
    type: GET_LIST_TYPES_FILTED,
    payload
})

export const setCheckedTypes = (payload) => ({
    type: SET_CHECKED_TYPES,
    payload
})