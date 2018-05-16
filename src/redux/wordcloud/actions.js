import * as axios from "axios";
import URL from "./../../config/server";

import {
   WORDCLOUD_FETCH_START,
   WORDCLOUD_FETCH_SUCCESS,
   WORDCLOUD_FETCH_ERROR
} from './actionTypes'

import Axios from "axios";

export function requestData() {
   return {
      type: WORDCLOUD_FETCH_START,
      wordCloud: {
         data: [],
         isFetching: true
      }
   }
}

export function receiveData(json) {
   return {
      type: WORDCLOUD_FETCH_SUCCESS,
      wordCloud: {
         isFetching: false,
         data: json
      },

   }
}

export function errorData(graph, errMsg) {
   return {
      type: WORDCLOUD_FETCH_ERROR,
      wordCloud: {
         isFetching: false,
         data: []
      }
   }
}

export const fetchData = (graphType, route) => async dispatch => {
   dispatch(requestData())
   try {
      const { data } = await axios.get(`${URL}/words/${route}`)
      setTimeout(() => dispatch(receiveData(data)), 1000)
   } catch (err) { }
}
