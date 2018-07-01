import {combineReducers} from 'redux';
import passengerReducer from './passenger-reducer';

export default combineReducers({
  passengerList: passengerReducer
})
