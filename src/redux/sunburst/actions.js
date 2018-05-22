import * as axios from "axios";
import URL from "./../../config/server";

import {
   SUNBURST_FETCH_START,
   SUNBURST_FETCH_SUCCESS,
   SUNBURST_FETCH_ERROR
} from './actionTypes'

export function requestData() {
   return {
      type: SUNBURST_FETCH_START,
      sunBurst: {
         data: [],
         isFetching: true
      }
   }
}

export function receiveData(json) {
   return {
      type: SUNBURST_FETCH_SUCCESS,
      sunBurst: {
         isFetching: false,
         data: json
      },

   }
}

export function errorData(graph, errMsg) {
   return {
      type: SUNBURST_FETCH_ERROR,
      sunBurst: {
         isFetching: false,
         data: []
      }
   }
}

export const fetchData = (route) => async dispatch => {
   dispatch(requestData())
   try {
      const { data } = await axios.get(`${URL}/graphs/${route}`)
      setTimeout(() => dispatch(receiveData(data)), 1000)
   } catch (err) { }
}
