const initialState = {
    name: '',
    photo: '',
    ceo: '',
    description: '',

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
    selected: null
}

const UPDATE = 'UPDATE';
const CLEARSTATE = 'CLEARSTATE';
const GETBREEDS = 'GETBREEDS';
const UPDATESELECTED = 'UPDATESELECTED';

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
            return {...state, selected: payload}
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

export function updateSelected(id){
    return {
        type: UPDATESELECTED,
        payload: id
    }
}

export default reducer;