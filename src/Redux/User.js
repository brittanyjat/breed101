import axios from 'axios';

const userState = {
    currentBreed: [],
    loading: false,
    photos: [],
    spotlight: []
}

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const GET_PHOTOS = 'GET_PHOTOS';
const _PENDING = 'PENDING';
const _FULFILLED = '_FULFILLED';
const GET_SPOTLIGHT = 'GET_SPOTLIGHT';

export default function user(state = userState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_CURRENT + _PENDING:
            return { ...state, loading: true }
        case UPDATE_CURRENT + _FULFILLED:
            return { ...state, currentBreed: payload }
        case GET_PHOTOS + _PENDING:
            return { ...state, loading: true }
        case GET_PHOTOS + _FULFILLED:
            return { ...state, photos: payload }
        case GET_SPOTLIGHT + _PENDING:
            return { ...state, loading: true }
        case GET_SPOTLIGHT + _FULFILLED:
            return { ...state, spotlight: payload }
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

export function getPhotos(id) {
    const promise = axios.get(`/api/photos/${id}`).then(res => res.data);
    return {
        type: GET_PHOTOS,
        payload: promise
    }
}

export function getSpotlight() {
    const promise = axios.get('/api/spotlight').then(res => res.data);
    return {
        type: GET_SPOTLIGHT,
        payload: promise
    }
}