import { SET_PRODUCTS } from './constants'
import { SET_PAGINATIONS } from './constants'
import { SET_FILTER } from './constants'
import { SET_SEARCH_ITEM } from './constants'
import { SET_CATEGORYS } from './constants'
import { CategoryData } from '../components/HomePages/SidebarData'
import { SET_PRODUCTS_TYPES } from './constants'
import { SET_PRODUCTS_BRANDS } from './constants'
import { SET_PRODUCTS_PRICES } from './constants'

const initState = {
    products: [],
    products_types: [],
    products_brands: [],
    products_prices: [],
    paginations: {
        _page: 1,
        _limit: 16,
        _totalRows: 1,
    },
    filter: {
        _page: 1,
        _limit: 16,
        name_like: '',
        _sort: '',
        _order: '',
    },
    searchItem: '',
    categorys: CategoryData
    
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_PAGINATIONS:
            return {
                ...state,
                paginations: action.payload
            }
        case SET_FILTER: 
            return {
                ...state,
                filter: action.payload
            }
        case SET_SEARCH_ITEM:
            return {
                ...state,
                searchItem: action.payload
            }
        case SET_CATEGORYS:
            return {
                ...state,
                categorys: action.payload
            }
        case SET_PRODUCTS_TYPES:
            return {
                ...state,
                products_types: action.payload
            }
        case SET_PRODUCTS_BRANDS:
            return {
                ...state,
                products_brands: action.payload
            }
        case SET_PRODUCTS_PRICES:
            return {
                ...state,
                products_prices: action.payload
            }
        default:
            throw new Error("invalid action.")
    }
}

export { initState }
export default reducer