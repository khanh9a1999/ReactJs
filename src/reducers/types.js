import { GET_LIST_ALL_TYPES_SUCCESS, SET_CHECKED_TYPES,GET_LIST_ALL_TYPES_ERROR, GET_LIST_TYPES_FILTED } from '../constants/constants'

const initState = {
   listAllTypes: [],
   listTypesFilted: [],
   error: null,
   listInputTypes: []
}

const typesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_ALL_TYPES_SUCCESS:
            return {
                ...state,
                listAllTypes: action.payload
            }
        case GET_LIST_ALL_TYPES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_LIST_TYPES_FILTED:
            return {
                ...state,
                listTypesFilted: action.payload
            }
        case SET_CHECKED_TYPES:
            return {
                ...state,
                listInputTypes: action.payload
            }
        default:
            return state
    }
}

export default typesReducer