import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import { getPassengers } from '../store/actions/passenger-action'
import PassengerDataTable from './PassengerTable'

class Passengers extends Component {
  static propTypes = {
    getPassengers: PropTypes.func.isRequired,
    passengerList: PropTypes.array.isRequired
  }

  static defaultProps = {
    passengerList: []
  }

  componentWillMount() {
    this.props.getPassengers();
  }
  
  render() {
    return (
      <div>
        <PassengerDataTable passDetails = {this.props.passengerList}/>        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  passengerList: state.passengerList
})

const dispatchToProps = (dispatch) => ({
  getPassengers: () => dispatch(getPassengers())
})

export default connect(mapStateToProps, dispatchToProps)(Passengers);
