import { SET_SORT_BY_PRICES } from "../constants/constants";

const initState = {
    options: {}
 }

 const sortReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SORT_BY_PRICES:
            return {
                ...state,
                options: action.payload
            }
        default:
            return state
    }
}

export default sortReducer