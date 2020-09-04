import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
            default: return state
        case 'REMOVE_CAR':
            const newState = [ ...state ]
            newState.splice(action.value, 1);
            return newState;
    }
}

export default combineReducers({ user, cars })