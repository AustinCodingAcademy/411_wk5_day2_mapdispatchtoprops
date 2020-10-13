import {connect} from 'react-redux'
import Chart from '../components/Chart'

const mapStatToProps = (state) => {
    return {
        cars: state.cars
    }
}


export default connect(mapStatToProps)(Chart)