import * as axios from "axios";
import URL from "./../config/server";

import {
   FETCH_DATA_START,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_ERROR
} from './index'
import Axios from "axios";

export function requestData(graph) {
   console.log(graph)
   return {
      type: FETCH_DATA_START,
      foo: 'bar'
   }
}

export function receiveData(graph, json) {
   return {
      type: FETCH_DATA_SUCCESS,
      graph,
      data: json.data
   }
}

export function errorData(graph, errMsg) {
   return {
      type: FETCH_DATA_ERROR,
      graph,
      errMsg
   }
}

export const fetchData = graph => dispatch => {
   console.log(23)
   dispatch(requestData(graph))
   // return axios.get(`${URL}/words/times`)
   //    .then(
   //       resp => { return dispatch(receiveData(graph, resp)) },
   //       err => { return dispatch(errorData(graph, err)) }
   //    )
}
