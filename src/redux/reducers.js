import { combineReducers } from 'redux'

    const user = (state = null, action) => state

    const cars = (state = [], action) => {
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