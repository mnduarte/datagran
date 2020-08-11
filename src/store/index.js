import { combineReducers } from 'redux';
import graphReducer from './Graph/reducer'
import postReducer from './Post/reducer'

export default combineReducers({
    graphReducer,
    postReducer
});