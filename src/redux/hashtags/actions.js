import * as axios from 'axios';
import URL from '../../config/server';

import {
	HASHTAGS_FETCH_START,
	HASHTAGS_FETCH_SUCCESS,
	HASHTAGS_FETCH_ERROR,
} from './actionTypes';

export function requestData() {
	return {
		type: HASHTAGS_FETCH_START,
		hashtags: {
			data: [],
			isFetching: true,
		},
	};
}

export function receiveData(json) {
	return {
		type: HASHTAGS_FETCH_SUCCESS,
		hashtags: {
			isFetching: false,
			data: json,
		},
	};
}

export function errorData() {
	return {
		type: HASHTAGS_FETCH_ERROR,
		hashtags: {
			isFetching: false,
			data: [],
		},
	};
}

export const fetchData = (start, stop) => async (dispatch) => {
	dispatch(requestData());
	try {
		const { data } = await axios.get(
			`${URL}/graphs/hashtags?start=${start.toISOString()}&stop=${stop.toISOString()}`,
		);
		setTimeout(() => dispatch(receiveData(data)), 1000);
	} catch (err) { console.log(err); }
};
