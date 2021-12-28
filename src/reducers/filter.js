import { SET_FILTER } from '../constants/constants'
 
const initialState = {
    filter: {
        _page: 1,
        _limit: 16,
        name_like: '',
        _sort: '',
        _order: '',
        categories_like: '',
        brand_like: '',
        type_like: '',
        rating_like: '',
        price_range_like: '',

    }
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export default filterReducer