import {GET_PASSENGERS} from './passenger-constants';

export const getPassengers = () => dispatch => {
  return fetch('/api/getPassengers')
    .then(res => res.json())
    .then(passengerList => dispatch({type: GET_PASSENGERS, payload: passengerList}))
}
