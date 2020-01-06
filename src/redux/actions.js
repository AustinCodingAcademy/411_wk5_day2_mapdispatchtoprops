import { connect } from "react-redux";

export const addCar = Car => {
    return {
        type: "ADD_CAR",
        value: Car
    }
}

export const removeCar = index => {
    return {
        type: "REMOVE_CAR",
        value: index
    }
}