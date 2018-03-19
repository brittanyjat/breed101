import axios from 'axios';
import _ from 'underscore';

const initialState = {
    size: 0,
    matched: [],
    loading: false
}

// const _PENDING = '_PENDING';
// const _FULFILLED = '_FULFILLED';
const GET_QUIZ_BREEDS = 'GET_QUIZ_BREEDS';
const SIZE_SELECT = 'SIZE_SELECT';

export default function quiz(state = initialState, action){
    const {payload} = action;
    console.log(state.size)
    switch(action.type){
        case SIZE_SELECT:
            var newSize = state.size;
            newSize < payload ? newSize = payload : null
            return { ...state, size: newSize }
        default:
            return state
    }
}

export function quizMatch(){
    const promise = null
    return {
        type: GET_QUIZ_BREEDS,
        payload: promise
    }
}

export function sizeSelector(value){
    return {
        type: SIZE_SELECT,
        payload: value
    }
}