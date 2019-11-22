import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { actions } from './redux'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)
