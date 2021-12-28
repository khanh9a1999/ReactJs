import { SEARCH_ITEM_SAGA, SET_VALUES_INPUT_SEARCH } from "../constants/constants"

export const searchItemSaga = (payload) => {
    return {
        type: SEARCH_ITEM_SAGA,
        payload
    }
}

export const setValuesInputSearch = (payload) => {
    return {
        type: SET_VALUES_INPUT_SEARCH,
        payload
    }
}