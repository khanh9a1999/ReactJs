import { GET_LIST_ALL_CATEGORIES_SUCCESS, SET_SELECTED_CATEGORIES,GET_LIST_ALL_CATEGORIES_ERROR, GET_LIST_CATEGORIES_FILTED } from '../constants/constants'

const initState = {
   listAllCategories: [],
   listCategoriesFilted: [],
   error: null,
   selectedCategory: ''
}

const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                listAllCategories: action.payload
            }
        case GET_LIST_ALL_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_LIST_CATEGORIES_FILTED:
            return {
                ...state,
                listCategoriesFilted: action.payload
            }
        case SET_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state
    }
}

export default categoriesReducer