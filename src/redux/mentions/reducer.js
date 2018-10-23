import {
  MENTIONS_FETCH_START,
  MENTIONS_FETCH_SUCCESS,
  MENTIONS_FETCH_ERROR,
} from './actionTypes';

import initialState from '../state';

export default function mentions(state = initialState, action) {
  switch (action.type) {
    case MENTIONS_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case MENTIONS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.mentions.data,
      };
    case MENTIONS_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        data: [],
      };
    default:
      return { ...state };
  }
}
