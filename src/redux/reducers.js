import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const newState = [ ...state ]
            return newState.splice(action.value, 1)
        default:
            return state
    }
}

export default combineReducers({ user, cars })
