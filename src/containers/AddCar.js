import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'
import { removeCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
    removeCar: (index) => dispatch(removeCar(index))
  }
}

export default connect(null, mapDispatchToProps)(AddCar)
// above: ^^ since there is no mapStateToProps function we need to pass null in it's place. It's expected as the first parameter of the connect function.