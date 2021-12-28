import { put,call, takeEvery ,debounce } from 'redux-saga/effects';
import axios from 'axios';
import {getListProductsSuccess, getListProductsError} from './actions/products';
import queryString from 'query-string'
import { setLoading } from './actions/products'
import { setFilter } from './actions/filter';
import {getListAllBrandsSuccess, getListAllBrandsError, getListBrandsFilted} from './actions/brands'
import {getPostData} from './postAPI';
import {getListAllTypesSuccess, getListAllTypesError, getListTypesFilted} from './actions/types'
import {getListAllPricesSuccess, getListAllPricesError, getListPricesFilted} from './actions/prices'
import {getListAllCategoriesSuccess, getListAllCategoriesError, getListCategoriesFilted} from './actions/categorys'


// worker saga
// products home
export function* getListProductsSaga(action) {
  console.log(action)
  yield put(setLoading(true))

  const filter = action.payload;
  try {
    const paramString = queryString.stringify(filter)
    console.log(paramString)
    const response = yield axios(
      {
          method: 'GET',
          url:  `http://localhost:3000/data?${paramString}`
      }
    );
    const { data } = response
    yield put(getListProductsSuccess(data));
    
  } catch (error) {
    yield put(getListProductsError(error))
  }
  
}

// search nè
export function* searchItemSaga(action) {

  const filter = action.payload.filter
  const value = action.payload.value;

  yield put(setFilter({
        ...filter,
        _page: 1,
        name_like: value
      }))
}


// brand nè
export function* getListBrandsSaga() {

  try {
    const response = yield call(getPostData);
    const { data } = response
    yield put(getListAllBrandsSuccess(data));

    const brands = []
    yield data.forEach((item) => {
      if(brands.indexOf(item.brand) === -1) {
        brands.push(item.brand)
      }
    })
    yield brands.sort()
    yield put(getListBrandsFilted(brands))
    
  } catch (error) {
    yield put(getListAllBrandsError(error))
  }
}

// type nef

export function* getListTypesSaga() {
  try {
    const response = yield call(getPostData);
    const { data } = response
    yield put(getListAllTypesSuccess(data));

    const types = []
    yield data.forEach((item) => {
      if(types.indexOf(item.type) === -1) {
        types.push(item.type)
      }
    })
    yield types.sort()
    yield put(getListTypesFilted(types))
    
  } catch (error) {
    yield put(getListAllTypesError(error))
  }
}
// price ne'
export function* getListPricesSaga() {
  try {
    const response = yield call(getPostData);
    const { data } = response
    yield put(getListAllPricesSuccess(data));

    const prices = []
    yield data.forEach((item) => {
      if(prices.indexOf(item.price_range) === -1) {
        prices.push(item.price_range)
      }
    })
    yield prices.sort()
    yield put(getListPricesFilted(prices))
    
  } catch (error) {
    yield put(getListAllPricesError(error))
  }
}

// categori nef
export function* getCategoriesSaga(){
  try {
    const response = yield call(getPostData);
    const { data } = response
    yield put(getListAllCategoriesSuccess(data));

    const categories = []
    yield data.forEach((item) => {
      if(categories.indexOf(item.categories) === -1) {
        categories.push(item.categories)
      }
    })
    yield categories.sort()
    yield put(getListCategoriesFilted(categories))
    
  } catch (error) {
    yield put(getListAllCategoriesError(error))
  }
}

// watcher saga


function* rootSaga(){
  yield debounce(300,'SEARCH_ITEM_SAGA', searchItemSaga)
  yield takeEvery('GET_LIST_CATEGORIES_SAGA', getCategoriesSaga)
  yield takeEvery('GET_LIST_BRANDS_SAGA', getListBrandsSaga)
  yield takeEvery('GET_LIST_TYPES_SAGA', getListTypesSaga)
  yield takeEvery('GET_LIST_PRODUCTS_SAGA', getListProductsSaga);
  yield takeEvery('GET_LIST_PRICES_SAGA', getListPricesSaga)
}

export default rootSaga 
