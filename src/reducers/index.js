import filterReducer from "./filter";
import postsReducer from "./products"
import typesReducer from "./types"
import brandsReducer from "./brands"
import categorysReducer from "./categorys"
import paginationsReducer from "./paginations"
import pricesReducer from "./prices"
import searchReducer from "./search"
import sortReducer from "./sort";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    filter: filterReducer,
    categorys: categorysReducer,
    paginations: paginationsReducer,
    products: postsReducer,
    brands: brandsReducer,
    types: typesReducer,
    prices: pricesReducer,
    search: searchReducer,
    sort: sortReducer
})

export default rootReducer