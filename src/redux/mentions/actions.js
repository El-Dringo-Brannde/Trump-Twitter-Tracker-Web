import * as axios from "axios";
import URL from "./../../config/server";

import {
   MENTIONS_FETCH_START,
   MENTIONS_FETCH_SUCCESS,
   MENTIONS_FETCH_ERROR
} from './actionTypes'

export function requestData() {
   return {
      type: MENTIONS_FETCH_START,
      mentions: {
         data: [],
         isFetching: true
      }
   }
}

export function receiveData(json) {
   return {
      type: MENTIONS_FETCH_SUCCESS,
      mentions: {
         isFetching: false,
         data: json
      }
   }
}

export function errorData(graph, errMsg) {
   return {
      type: MENTIONS_FETCH_ERROR,
      mentions: {
         isFetching: false,
         data: []
      }
   }
}

export const fetchData = (start, stop) => async dispatch => {
   dispatch(requestData())
   try {
      const { data } = await axios.get(`${URL}/graphs/mentions?start=${start.toISOString()}&stop=${stop.toISOString()}`)
      setTimeout(() => dispatch(receiveData(data)), 1000)
   } catch (err) { }
}
