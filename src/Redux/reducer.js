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
    shedding: null
}

const UPDATE = 'UPDATE';
const CLEARSTATE = 'CLEARSTATE';

function reducer(state = initialState, action) {
    // console.log(state);
    const { payload } = action;
    switch (action.type) {
        case UPDATE:
            return { ...state, [payload.prop]: payload.value }
        case CLEARSTATE:
            return { ...state, initialState }
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

export default reducer;