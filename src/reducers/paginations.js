import { SET_PAGINATIONS } from "../constants/constants"

const initState = {
    paginations: {
        _page: 1,
        _limit: 16,
        _totalRows: 1,
    }
}

const paginationsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PAGINATIONS:
            return {
                paginations: action.payload
            }
        default:
            return state
    }
}

export default paginationsReducer