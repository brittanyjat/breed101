import axios from 'axios';
import _ from 'underscore';

const userState = {
    currentBreed: [],
    loading: false,
    photos: [],
    spotlight: [],
    breedExplore: [],
    filteredValues: []
}

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const GET_PHOTOS = 'GET_PHOTOS';
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GET_SPOTLIGHT = 'GET_SPOTLIGHT';
const GET_EXPLORE = 'GET_EXPLORE';
const FILTER = 'FILTER';
const RESET_FILTER = 'RESET_FILTER';

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
        case GET_EXPLORE + _PENDING:
            return { ...state, loading: true }
        case GET_EXPLORE + _FULFILLED:
            return { ...state, breedExplore: payload }
        case FILTER:
            var filtered = []
            if (action.value === 'shedding'){
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] <= 50 })
            } else if (action.value === 'hypoallergenic'){
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] === true })
            } else {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] >= 65 })
            }
            return { ...state, breedExplore: filtered, filteredValues: [...state.filteredValues, ...[action.value]] }
        case RESET_FILTER:
            return { ...state, filteredValues: [] }
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

export function getExplore() {
    const promise = axios.get('/api/explore').then(res => res.data);
    return {
        type: GET_EXPLORE,
        payload: promise
    }
}

export function filter(value) {
    return { value, type: FILTER }
}

export function resetFilter() {
    return {
        type: RESET_FILTER
    }
}