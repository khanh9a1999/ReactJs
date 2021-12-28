import { SET_SORT_BY_PRICES } from "../constants/constants";

export const setSortByPrices = (payload) => {
    return {
        type: SET_SORT_BY_PRICES,
        payload
    }
}

