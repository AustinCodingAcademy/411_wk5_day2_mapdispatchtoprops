import { connect } from 'react-redux'

import AddCar from '../components/AddCarComponent'
import { addCar, removeCar } from '../redux/actions'

//connect is looking for memory allotment called dispatch,
//so we will pass in dispatch
//default parameter is customarily called dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        
       
        //in the dispatch function/ method
        //we call the functions that we imported
        //in this case, addCar() and removeCar()
        //we used the parameters car and index; what are those arguments 
        //or from where are those arguments coming?
         //----------------
         //key is the function
        //value is a new function
        //that calls the key function
        //wrapped in a dispatch function
        addCar : (car) => dispatch(addCar(car)),
        removeCar : (index)=>dispatch(removeCar(index))
    }
}

//mapDispatchToProps needs to be wrapped up in the connect,
//like mapStateToProps
//-------------
// an immediate invoked function
// an "iify"
export default connect(null, mapDispatchToProps)(AddCar)