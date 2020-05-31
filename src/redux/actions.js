export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    };
};

export const removeCar = (id) => {
    return {
        type: 'REMOVE_CAR',
        value: id
    };
};