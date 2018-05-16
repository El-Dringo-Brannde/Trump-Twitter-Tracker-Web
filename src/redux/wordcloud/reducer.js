import {
   WORDCLOUD_FETCH_START,
   WORDCLOUD_FETCH_SUCCESS,
   WORDCLOUD_FETCH_ERROR
} from './actionTypes'

import initialState from './../state';

export default function wordCloud(state = initialState, action) {
   console.log('WORDCLOUD REDUCER', action)
   console.log('WORDCLOUD REDUCER', state)
   switch (action.type) {
      case WORDCLOUD_FETCH_START:
         return {
            ...state,
            isFetching: true
         }
      case WORDCLOUD_FETCH_SUCCESS:
         return {
            ...state,
            isFetching: false,
            data: action.wordCloud.data
         }
      case WORDCLOUD_FETCH_ERROR:
         return {
            ...state,
            isFetching: false,
            data: []
         }
      default:
         return { ...state }
   }
}