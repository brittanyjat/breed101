import axios from 'axios';

const initialState = {
    name: '',
    photo: '',
    ceo: '',
    description: '',
    hypoallergenic: false,
    youtube: '',

    trait1: '',
    trait2: '',
    trait3: '',

    weight: null,
    height: null,
    energy: null,
    expected: null,
    barking: null,

    intelligence: null,
    playful: null,
    affection: null,
    train: null,

    apartment: null,
    cat: null,
    dog: null,
    child: null,

    exercise: null,
    health: null,
    grooming: null,
    shedding: null,

    breedList: [],
    selected: null,
    currentBreed: [],
    loading: false
}

const UPDATE = 'UPDATE';
const CLEARSTATE = 'CLEARSTATE';
const GETBREEDS = 'GETBREEDS';
const UPDATESELECTED = 'UPDATESELECTED';
const DELETE_BREED = 'DELETE_BREED';
const CURRENT_BREED = 'CURRENT_BREED';
const _FULFILLED = '_FULFILLED';
const _PENDING = 'PENDING';

function reducer(state = initialState, action) {
    // console.log(state);
    const { payload } = action;
    switch (action.type) {
        case UPDATE:
            return { ...state, [payload.prop]: payload.value }
        case CLEARSTATE:
            return { ...state, initialState }
        case GETBREEDS:
            return Object.assign({}, state, { breedList: payload })
        case UPDATESELECTED:
            return { ...state, selected: payload }
        case DELETE_BREED + _FULFILLED:
            return { ...state, breedList: payload }
        case CURRENT_BREED + _PENDING:
            return { ...state, loading: true }
        case CURRENT_BREED + _FULFILLED:
            return { ...state, currentBreed: payload }
        default:
            return state
    }

}

export function update(prop, value) {
    return {
        type: UPDATE,
        payload: { prop, value }
    }
}

export function clearState() {
    return {
        type: CLEARSTATE
    }
}

export function getAll(breeds) {
    return {
        type: GETBREEDS,
        payload: breeds
    }
}

export function updateSelected(id) {
    return {
        type: UPDATESELECTED,
        payload: id
    }
}

export function deleteBreed(id) {
    const promise = axios.delete(`/api/breed/${id}`).then(res => res.data);

    return {
        type: DELETE_BREED,
        payload: promise
    }
}

export function breedDetail(id) {
    const promise = axios.get(`/api/breed/${id}`).then(res => res.data);

    return {
        type: CURRENT_BREED,
        payload: promise
    }
}

export default reducer;