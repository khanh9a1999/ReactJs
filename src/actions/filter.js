import { SET_FILTER } from "../constants/constants"

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload
    }
}
