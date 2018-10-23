import {
  HASHTAGS_FETCH_START,
  HASHTAGS_FETCH_SUCCESS,
  HASHTAGS_FETCH_ERROR,
} from './actionTypes';

import initialState from '../state';

export default function hashtags(state = initialState, action) {
  switch (action.type) {
    case HASHTAGS_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case HASHTAGS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.hashtags.data,
      };
    case HASHTAGS_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        data: [],
      };
    default:
      return { ...state };
  }
}
