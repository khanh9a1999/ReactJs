import { GET_LIST_ALL_CATEGORIES_SUCCESS, SET_SELECTED_CATEGORIES ,GET_LIST_CATEGORIES_FILTED, GET_LIST_ALL_CATEGORIES_ERROR, GET_LIST_CATEGORIES_SAGA } from "../constants/constants"

export const getListAllCategoriesSuccess = (payload) => ({
    type: GET_LIST_ALL_CATEGORIES_SUCCESS,
    payload
})

export const getListAllCategoriesError = (payload) => ({
    type: GET_LIST_ALL_CATEGORIES_ERROR,
    payload
})

export const getListCategoriesSaga = (payload) => ({
    type: GET_LIST_CATEGORIES_SAGA,
    payload
})

export const getListCategoriesFilted = (payload) => ({
    type: GET_LIST_CATEGORIES_FILTED,
    payload
})

export const setSelectedCategories = (payload) => ({
    type: SET_SELECTED_CATEGORIES,
    payload
})