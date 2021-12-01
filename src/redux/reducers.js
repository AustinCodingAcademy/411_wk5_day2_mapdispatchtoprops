import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    //the action is the returned object (?)
    //from the action creator functions (?)
    switch(action.type) {
        case "ADD_CAR" : 
            return action.value
            //now I'm guessing 
            //that we're going to add a third parameter (No, we have the action)
            //that will be the value (CHECK!)
            //and that value will go after the colon (CHECK!)
        case "REMOVE_CAR" :
            //but why can't this second one also just be action.value?
            //why is it more complicated?
            //we need to create a copy of state
            //otherwise we'd let this directly manipulate state
            //we do not directly mutate state; we allow redux to mutate it
            let newState = [...state]
            //splice first argument is the number from which you want to splice from
            //in our case index
            //second is how many you want to delete
            //in our case just 1
            //we might do lots of different things with this newState, though, right??
            //it's not always going to be splice?
            //action.value is the index, bc in actions, we pass in an index,
            //and that becomes the value
            newState.splice(action.value, 1)
            return newState
            //how is adding a car not directly manipulating state
            //but removing a car is directly manipulating state?

    //practice writing the default first,
    //bc if you do not return state
    default :
        return state
    }
}

// export const addCar = () => {
//     return {
//         type: "ADD_CAR",
//         value: "ford"
//     }
// }
// export const removeCar = (index) => {
//     return {
//         type: "REMOVE_CAR",
//         value: index
//     }
// }

export default combineReducers({ user, cars })

//all reducers must return state, cannot return undefined