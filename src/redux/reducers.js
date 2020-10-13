import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
   switch(action.type) {
       case 'ADD_CAR':
           return [...state, action.value]
        case 'REMOVE_CAR':
            const copyState = [...state]
            copyState.splice(action.value, 1)
            return copyState
        default: 
            return state
   }
}

export default combineReducers({ user, cars })