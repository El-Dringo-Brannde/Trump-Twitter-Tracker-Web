import * as axios from "axios";
import URL from "./../../config/server";

import {
   WORDCLOUD_FETCH_START,
   WORDCLOUD_FETCH_SUCCESS,
   WORDCLOUD_FETCH_ERROR
} from './actionTypes'

import Axios from "axios";

export function requestData(graphType) {
   return {
      type: WORDCLOUD_FETCH_START,
      wordCloud: {
         data: [],
         isFetching: true
      }
   }
}

export function receiveData(graph, json) {
   return {
      type: WORDCLOUD_FETCH_SUCCESS,
      graph,
      data: json.data
   }
}

export function errorData(graph, errMsg) {
   return {
      type: WORDCLOUD_FETCH_ERROR,
      graph,
      errMsg
   }
}

export const fetchData = graphType => async dispatch => {
   console.log(23)
   dispatch(requestData(graphType))
   try {
      const { data } = await axios.get(`${URL}/words/times`)
      // dispatch()
      console.log(data)
   } catch (err) {
      console.log(err)
   }
}
