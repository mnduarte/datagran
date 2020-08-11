import { SET_VALUE, GET_USER, GET_POST, GET_POSTS, LOADING, ERROR } from './types';

const URI = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = () => async (dispatch) => {
	dispatch({
		type: LOADING
	});

	try {
		const response = await fetch(URI)
		const data = await response.json();

		dispatch({
			type: GET_POSTS,
			payload: data
		})
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Error for get data Post.'
		})
	}
};

export const getDetails = (val) => async (dispatch) => {
	//Detect Post or User
	const urlDetail = val.dataLabel == 'id' ? `/${val.value}` : `/?userId=${val.value}`

	dispatch({
		type: LOADING
	});

	dispatch({
		type: SET_VALUE,
		payload: val.value
	});

	try {
		const response = await fetch(URI+urlDetail)
		const data = await response.json();

		dispatch({
			type: val.dataLabel == 'id' ? GET_POST : GET_USER,
			payload: data
		})
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Error for get data Post.'
		})
	}
};