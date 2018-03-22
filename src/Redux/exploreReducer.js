import axios from 'axios';
import _ from 'underscore';

const initialState = {
    loading: false,
    breedExplore: [],
    filteredValues: []
}

const GET_EXPLORE = 'GET_EXPLORE';
const FILTER = 'FILTER';
const RESET_FILTER = 'RESET_FILTER';
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const SORT = 'SORT';

export default function exploreReducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GET_EXPLORE + _PENDING:
            return { ...state, loading: true }
        case GET_EXPLORE + _FULFILLED:
            return { ...state, breedExplore: payload }

        case FILTER:
            var filtered = []
            if (action.value === 'shedding') {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] <= 50 })
            } else if (action.value === 'hypoallergenic') {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] === true })
            } else {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] >= 60 })
            }
            return { ...state, breedExplore: filtered, filteredValues: [...state.filteredValues, ...[action.value]] }

        case RESET_FILTER:
            return { ...state, filteredValues: [] }
        case SORT:
            return { ...state, breedExplore: _.sortBy(state.breedExplore, action.value).reverse() }
        default:
            return state
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

export function sort(value) {
    return { value, type: SORT }
}