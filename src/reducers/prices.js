import { GET_LIST_ALL_PRICES_SUCCESS, SET_VALUES_INPUT_PRICES_LTE, SET_VALUES_INPUT_PRICES_GTE, GET_LIST_ALL_PRICES_ERROR, GET_LIST_PRICES_FILTED } from '../constants/constants'

const initState = {
   listAllPrices: [],
   listPricesFilted: [],
   error: null,
   valuesGte: '',
   valuesLte: ''
}

const pricesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_ALL_PRICES_SUCCESS:
            return {
                ...state,
                listAllPrices: action.payload
            }
        case GET_LIST_ALL_PRICES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_LIST_PRICES_FILTED:
            return {
                ...state,
                listPricesFilted: action.payload
            }
        case SET_VALUES_INPUT_PRICES_GTE: 
            return {
                ...state,
                valuesGte: action.payload,
            }
        case SET_VALUES_INPUT_PRICES_LTE:
            return {
                ...state,
                valuesLte: action.payload,
            }
        default:
            return state
    }
}

export default pricesReducer