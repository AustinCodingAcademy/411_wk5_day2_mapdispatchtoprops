import { connect } from 'react-redux'
import { addCar } from '../redux/actions'
import AddCar from '../components/AddCar'

// added this function so we can send data FROM our component
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
 }

 export default connect(null, mapDispatchToProps)(AddCar)