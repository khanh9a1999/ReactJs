import { SET_VALUES_INPUT_SEARCH } from '../constants/constants'

const initState = {
    values: ''
 }
 
 const searchReducer = (state = initState, action) => {
     switch (action.type) {
         case SET_VALUES_INPUT_SEARCH:
             return {
                 ...state,
                 values: action.payload
             }
         default:
             return state
     }
 }
 
 export default searchReducer