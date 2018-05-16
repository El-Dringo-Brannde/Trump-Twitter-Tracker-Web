import * as axios from "axios";
import URL from "./../../config/server";

import {
   HEATMAP_FETCH_START,
   HEATMAP_FETCH_SUCCESS,
   HEATMAP_FETCH_ERROR
} from './actionTypes'

export function requestData() {
   return {
      type: HEATMAP_FETCH_START,
      heatMap: {
         data: [],
         isFetching: true
      }
   }
}

export function receiveData(json) {
   return {
      type: HEATMAP_FETCH_SUCCESS,
      heatMap: {
         isFetching: false,
         data: json
      }
   }
}

export function errorData(graph, errMsg) {
   return {
      type: HEATMAP_FETCH_ERROR,
      heatMap: {
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
