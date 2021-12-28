import { SET_PAGINATIONS } from "../constants/constants"

export const setPaginations = (paginations) => ({
    type: SET_PAGINATIONS,
    payload: paginations
})