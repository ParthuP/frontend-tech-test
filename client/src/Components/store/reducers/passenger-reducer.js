import {GET_PASSENGERS} from '../actions/passenger-constants'

const passengerReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_PASSENGERS:
        return payload
      default:
        return state
    }
}
export default passengerReducer;
