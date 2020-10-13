import { combineReducers } from 'redux'

const user = (state = null, action) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch (action.type) {
        case "ADD_CAR":
        return [...state, action.value]
        case "REMOVE_CAR":
            const stateCopy = [...state]
            stateCopy.splice(action.value, 1)
            return stateCopy
        default:
            return state;
    }
}

export default combineReducers({ user, cars })