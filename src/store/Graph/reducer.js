import { EMPTY_COMBO, RENDER_GRAPH, SET_AXIS_SELECTED, PARSED_DATA, FILTER_AXIS_Y, LOADING, ERROR } from './types';

const INITIAL_STATE = {
    xAxis: [],
    yAxis: [],
    seriesData: [],
    xAxisSelected: null,
    yAxisSelected: null,    
    emptyCombo: false,
    enableRenderGraph: false,
    loading: false,
    error: null
}

const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PARSED_DATA:            
        
            //Detect first array for assign to column
            const column = action.payload[0].map(e => capitalize(e.trim()))
            const buildData = []

            action.payload.forEach((ele, idx) => {
                //Avoid first, contain column
                if (idx != 0){
                    //Clean Spaces, Parse Number and assign with correct column name
                    ele.forEach((el, idx) => {
                        buildData.push({[column[idx]] : {value : isNaN(el.trim()) ? el.trim() : parseFloat(el.trim())}})
                    })   
                }    
            });
            return{
                ...state,
                xAxis: column,
                yAxis: column,
                seriesData: buildData,
                loading: false,
                error: null
            }
        case FILTER_AXIS_Y:
            return{
                ...state,
                yAxis: state.xAxis.filter(item => item != action.payload),
                loading: false,
                error: null
            }  
        case SET_AXIS_SELECTED:
            return{
                ...state,
                xAxisSelected: action.payload.xAxis,
                yAxisSelected: action.payload.yAxis,
                loading: false,
                error: null
            }  
        case RENDER_GRAPH:
            return{
                ...state,
                enableRenderGraph: action.payload,
            }  
        case EMPTY_COMBO:
            return{
                ...state,
                emptyCombo: action.payload,
            } 
        case LOADING:
            return{
                ...state,
                loading: true,
                error: null
            }
        case ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}