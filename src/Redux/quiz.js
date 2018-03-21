import axios from 'axios';

const initialState = {
    size: 0,
    matched: [],
    loading: false,
    apartment: false,
    cats: false,
    dogs: false,
    children: false,
    energy: 100,
    affection: 0,
    shedding: 100
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GET_QUIZ_BREEDS = 'GET_QUIZ_BREEDS';
const SIZE_SELECT = 'SIZE_SELECT';
const UPDATE_APARTMENT = 'UPDATE_APARTMENT';
const UPDATE_CATS = 'UPDATE_CATS';
const UPDATE_DOGS = 'UPDATE_DOGS';
const UPDATE_CHILDREN = 'UPDATE_CHILDREN';
const UPDATE_ENERGY = 'UPDATE_ENERGY';
const UPDATE_AFFECTION = 'UPDATE_AFFECTION';
const UPDATE_SHEDDING = 'UPDATE_SHEDDING';
const RESET = 'RESET';

export default function quiz(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case SIZE_SELECT:
            return { ...state, size: state.size < payload ? payload : null }
        case GET_QUIZ_BREEDS + _PENDING:
            return { ...state, loading: true }
        case GET_QUIZ_BREEDS + _FULFILLED:
            return { ...state, matched: payload }
        case UPDATE_APARTMENT:
            return { ...state, apartment: !state.apartment }
        case UPDATE_CATS:
            return { ...state, cats: !state.cats }
        case UPDATE_DOGS:
            return { ...state, dogs: !state.dogs }
        case UPDATE_CHILDREN:
            return { ...state, children: !state.children }
        case UPDATE_ENERGY:
            return { ...state, energy: payload }
        case UPDATE_AFFECTION:
            return { ...state, affection: payload }
        case UPDATE_SHEDDING:
            return { ...state, shedding: payload }
        case RESET:
            state = initialState
            return state
        default:
            return state
    }
}

export function quizMatch(body) {
    function converter(obj) {
        for (var i in obj) {
            if (obj[i] === true) {
                obj[i] = 50
            } else if (obj[i] === false) {
                obj[i] = 0
            } else {
                obj[i] = obj[i]
            }
        } return obj
    }
    converter(body);
    const promise = axios.post('/api/quiz', body).then(res => res.data);
    return {
        type: GET_QUIZ_BREEDS,
        payload: promise
    }
}

export function sizeSelector(value) {
    return {
        type: SIZE_SELECT,
        payload: value
    }
}

export function updateApartment() {
    return { type: UPDATE_APARTMENT }
}

export function updateCats() {
    return { type: UPDATE_CATS }
}

export function updateDogs() {
    return { type: UPDATE_DOGS }
}

export function updateChildren() {
    return { type: UPDATE_CHILDREN }
}

export function updateEnergy(value) {
    return { type: UPDATE_ENERGY, payload: value }
}

export function updateAffection(value) {
    return { type: UPDATE_AFFECTION, payload: value }
}

export function updateShedding(value) {
    return { type: UPDATE_SHEDDING, payload: value }
}

export function resetQuiz() {
    return { type: RESET }
}