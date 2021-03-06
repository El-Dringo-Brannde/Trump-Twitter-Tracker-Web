import * as axios from 'axios';
import URL from '../../config/server';

import {
  SUNBURST_FETCH_START,
  SUNBURST_FETCH_SUCCESS,
  SUNBURST_FETCH_ERROR,
} from './actionTypes';

export function requestData() {
  return {
    type: SUNBURST_FETCH_START,
    sunBurst: {
      data: [],
      isFetching: true,
    },
  };
}

export function receiveData(json) {
  return {
    type: SUNBURST_FETCH_SUCCESS,
    sunBurst: {
      isFetching: false,
      data: json,
    },
  };
}

export function errorData() {
  return {
    type: SUNBURST_FETCH_ERROR,
    sunBurst: {
      isFetching: false,
      data: [],
    },
  };
}

export const fetchData = (start, stop, type) => async (dispatch) => {
  dispatch(requestData());
  try {
    const { data } = await axios.get(
      `${URL}/graphs/sunburst?start=${start.toISOString()}&stop=${stop.toISOString()}&type=${type}`,
    );
    setTimeout(() => dispatch(receiveData(data)), 1000);
  } catch (err) { console.log(err); }
};
