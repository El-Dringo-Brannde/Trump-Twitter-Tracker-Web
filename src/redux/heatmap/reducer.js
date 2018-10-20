import {
  HEATMAP_FETCH_START,
  HEATMAP_FETCH_SUCCESS,
  HEATMAP_FETCH_ERROR,
} from './actionTypes';

import initialState from '../state';

export default function heatMap(state = initialState, action) {
  switch (action.type) {
    case HEATMAP_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case HEATMAP_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.heatMap.data,
      };
    case HEATMAP_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        data: [],
      };
    default:
      return { ...state };
  }
}
