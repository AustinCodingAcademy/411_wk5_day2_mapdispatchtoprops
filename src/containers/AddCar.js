import { connect } from 'react-redux'

import AddCar from '../components/AddCar'
import { addCar, removeCar } from '../redux/actions'

//connect is looking for memory allotment called dispatch,
//so we will pass in dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        //in the dispatch function/ method
        //we call the functions that we imported
        //in this case, addCar() and removeCar()
        //we used the parameters car and index; what are those arguments 
        //or from where are those arguments coming?
        addCar : (car) => dispatch(addCar(car)),
        removeCar : (index)=>dispatch(removeCar(index))
    }
}

//mapDispatchToProps needs to be wrapped up in the connect,
//like mapStateToProps
//well crap, I had done this last part differently
//do I need (AddCar) in this???
export default connect(mapStateToProps, matchDispatchToProps)(AddCar)