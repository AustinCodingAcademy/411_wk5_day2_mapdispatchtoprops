import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    return state
}

export default combineReducers({ user, cars })