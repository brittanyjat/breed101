import axios from 'axios';

const userState = {
    currentBreed: [],
    loading: false
}

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const _PENDING = 'PENDING';
const _FULFILLED = '_FULFILLED';

export default function frontEndReducer(state = userState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_CURRENT + _PENDING:
            return { ...state, loading: true }
        case UPDATE_CURRENT + _FULFILLED:
            return { ...state, currentBreed: payload }
        default:
            return state
    }
}

export function breedDetail(id) {
    const promise = axios.get(`/api/breed/${id}`).then(res => res.data);

    return {
        type: UPDATE_CURRENT,
        payload: promise
    }
}
