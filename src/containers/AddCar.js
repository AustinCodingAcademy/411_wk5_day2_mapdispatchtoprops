import { connect } from 'react-redux'
import AddCar from './../components/AddCar'
import { addCar } from './../redux/actions'

function mapDispatchToProps(dispatch) {
  return { addCar: (car) => dispatch(addCar(car)) };
}

export default connect(null, mapDispatchToProps)(AddCar)