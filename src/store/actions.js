import { SET_PRODUCTS } from './constants'
import { SET_PAGINATIONS } from './constants'
import { SET_FILTER } from './constants'
import { SET_SEARCH_ITEM } from './constants'
import { SET_CATEGORYS } from './constants'
import { SET_PRODUCTS_TYPES } from './constants'
import { SET_PRODUCTS_BRANDS } from './constants'
import { SET_PRODUCTS_PRICES } from './constants'

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const setPaginations = payload => ({
    type: SET_PAGINATIONS,
    payload
})

export const setFilter = payload => ({
    type: SET_FILTER,
    payload
})

export const setSearchItem = payload => ({
    type: SET_SEARCH_ITEM,
    payload
})

export const setCategorys = payload => ({
    type: SET_CATEGORYS,
    payload
})


export const setProductsTypes = payload => ({
    type: SET_PRODUCTS_TYPES,
    payload
})

export const setProductsBrands = payload => ({
    type: SET_PRODUCTS_BRANDS,
    payload
})

export const setProductsPrices = payload => ({
    type: SET_PRODUCTS_PRICES,
    payload
})
