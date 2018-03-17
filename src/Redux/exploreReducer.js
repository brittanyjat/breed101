import axios from 'axios';
import _ from 'underscore';

const initialState = {
    loading: false,
    breedExplore: [],
    // breedExploreCopy: [],
    filteredValues: []
}

const GET_EXPLORE = 'GET_EXPLORE';
const FILTER = 'FILTER';
const RESET_FILTER = 'RESET_FILTER';
// const UNDO_FILTER = 'UNDO_FILTER';
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';

export default function exploreReducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GET_EXPLORE + _PENDING:
            return { ...state, loading: true }
        case GET_EXPLORE + _FULFILLED:
            return { ...state, breedExplore: payload, breedExploreCopy: payload }

        case FILTER:
            var filtered = []
            if (action.value === 'shedding') {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] <= 50 })
            } else if (action.value === 'hypoallergenic') {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] === true })
            } else {
                filtered = _.filter(state.breedExplore, function (breed) { return breed[action.value] >= 65 })
            }
            return { ...state, breedExplore: filtered, filteredValues: [...state.filteredValues, ...[action.value]] }

        case RESET_FILTER:
            return { ...state, filteredValues: [] }

        // case UNDO_FILTER:
        //     var newFiltered = state.filteredValues;
        //     const { breedExploreCopy } = state;
        //     for (var i = 0; i < newFiltered.length; i++) {
        //         newFiltered[i] === action.value ? newFiltered.splice(i, 1) : null;

        //         newFiltered.forEach(function (element) {
        //             _.filter(breedExploreCopy, function (breed) { return element >= 65 })
        //         })
        //     }

        //     return { ...state, filteredValues: newFiltered, breedExplore: breedExploreCopy }
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

// export function undo(value) {
//     return { value, type: UNDO_FILTER }
// }