import { GET_LIST_ALL_BRANDS_SUCCESS,SET_CHECKED_BRANDS, GET_LIST_ALL_BRANDS_ERROR, GET_LIST_BRANDS_FILTED } from '../constants/constants'

const initState = {
   listAllBrands: [],
   listBrandsFilted: [],
   error: null,
   listInputBrands: []
}

const brandsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_ALL_BRANDS_SUCCESS:
            return {
                ...state,
                listAllBrands: action.payload
            }
        case GET_LIST_ALL_BRANDS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_LIST_BRANDS_FILTED:
            return {
                ...state,
                listBrandsFilted: action.payload
            }
        case SET_CHECKED_BRANDS:
            return {
                ...state,
                listInputBrands: action.payload
            }
        default:
            return state
    }
}

export default brandsReducer