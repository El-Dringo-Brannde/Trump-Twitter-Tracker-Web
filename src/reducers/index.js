import {
   FETCH_DATA_ERROR,
   FETCH_DATA_START,
   FETCH_DATA_SUCCESS
} from "./../actions/index";
import { combineReducers } from "redux";


function getData(state = {
   data: [],
   isFetching: false
}, action) {
   console.log(action)
   switch (action.type) {
      case FETCH_DATA_START:
         return { ...state, isFetching: true, data: [] }
      case FETCH_DATA_SUCCESS:
         return { ...state, wordcloud: action.graph }
      default:
         return state
   }
}

const rootReducer = combineReducers({ getData })
export default rootReducer