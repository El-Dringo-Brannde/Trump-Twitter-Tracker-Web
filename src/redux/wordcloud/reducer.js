import {
   WORDCLOUD_FETCH_START,
   WORDCLOUD_FETCH_SUCCESS,
   WORDCLOUD_FETCH_ERROR
} from './actionTypes'

import initialState from './../state';

export default function wordCloud(state = initialState, action) {
   console.log('WORDCLOUD REDUCER', action.type)
   console.log('WORDCLOUD REDUCER', state)
   switch (action.type) {
      // case WORDCLOUD_FETCH_START:
      //    let newState = {
      //       wordCloud: {
      //          isFetching: true
      //       }
      //    }
      //    // state.wordCloud.isFetching = true
      //    console.log({ ...state, newState })
      //    return { ...state, newState }
      // case WORDCLOUD_FETCH_SUCCESS:
      //    state.wordCloud = {
      //       isFetching: false,
      //       data: action.wordcloud.data
      //    }
      //    return state
      // case WORDCLOUD_FETCH_ERROR:

      //    return state
      default:
         console.log(state)
         return {...state}
   }
}