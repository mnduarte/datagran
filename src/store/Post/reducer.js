import { SET_VALUE, GET_USER, GET_POST, GET_POSTS, LOADING, ERROR } from './types';

const INITIAL_STATE = {
    posts: [],
    post: [],
    user: [],
    lastSelected: null,
    value: null,
    loading: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        case GET_POST:
            const arr = []
            //Parse in array for no conflict in map
            arr.push(action.payload)
            return{
                ...state,
                post: arr,
                lastSelected: 'Post',
                loading: false,
                error: null
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                lastSelected: 'User',
                loading: false,
                error: null
            }
        case SET_VALUE:
            return{
                ...state,
                value: action.payload
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