import { connect } from 'react-redux'
import AddCar from '../components/Car'
import { addCar } from 'redux'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(AddCar)
