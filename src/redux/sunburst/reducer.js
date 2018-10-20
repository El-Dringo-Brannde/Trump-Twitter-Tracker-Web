import {
  SUNBURST_FETCH_START,
  SUNBURST_FETCH_SUCCESS,
  SUNBURST_FETCH_ERROR,
} from './actionTypes';

import initialState from '../state';

export default function sunBurst(state = initialState, action) {
  switch (action.type) {
    case SUNBURST_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case SUNBURST_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.sunBurst.data,
      };
    case SUNBURST_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        data: [],
      };
    default:
      return { ...state };
  }
}
