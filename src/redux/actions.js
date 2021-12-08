//an action is an object with keys on it
//must have a type key, must have a value key (sometimes payload)
//action creators are functions that return actions
//use export, not export default, because we're exporting more than one thing
export const addCar = (car) => {
    return {
        type: "ADD_CAR",
        //this will not be ford or a specific name
        //but later will be a variable that we pass in as props
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: "REMOVE_CAR",
        value: index
    }
}
//we'll pass this/ these(?) object to the reducer