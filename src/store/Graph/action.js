import Papa from 'papaparse';
import { EMPTY_COMBO, RENDER_GRAPH, SET_AXIS_SELECTED, FILTER_AXIS_Y, PARSED_DATA, LOADING, ERROR } from './types';

export const parseData = (csvString) => (dispatch) => {
	dispatch({
		type: LOADING
	});

	try {		
		const response = Papa.parse(csvString);

		dispatch({
			type: PARSED_DATA,
			payload: response.data
		})
	}
	catch (error) {
		dispatch({
			type: ERROR,
			payload: 'Error in process Data.'
		})
	}
};

export const emptyCombo = (val) => (dispatch) => {
	dispatch({
		type: EMPTY_COMBO,
		payload: val
	})
};

export const filterY = (item) => (dispatch) => {
	dispatch({
		type: FILTER_AXIS_Y,
		payload: item
	})
};

export const setAxisSelected = (val) => (dispatch) => {
	dispatch({
		type: SET_AXIS_SELECTED,
		payload: val
	})
};

export const enableRenderGraph = (val) => (dispatch) => {
	dispatch({
		type: RENDER_GRAPH,
		payload: val
	})
};