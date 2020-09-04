export const addCar = car => {
  return {
    type: "ADD_CAR",
    payload: car
  }
}

export const removeCar = index => {
  return {
    type: "REMOVE_CAR",
    payload: index
  }
}