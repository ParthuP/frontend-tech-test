import React, { Component } from 'react';
import { Button, Table, Form, FormControl, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import './Passenger.css';

class PassengerDataTable extends Component {
    constructor(props, context){
      super();
      this.addPassenger = this.addPassenger.bind(this);
      this.deletePassenger = this.deletePassenger.bind(this);
      this.myTableRowData = this.myTableRowData.bind(this);
      this.updatePassenger = this.updatePassenger.bind(this);
      this.state = {
        newPassObj : {},
        addPassengerList :[],
        delPassengerList:[],
        updatePassengerList:[],
        rowDataList:[],
        selectedRowData:{}
      }
    }
    addPassenger(e){
      this.addPassengerList = this.props.passDetails;
      this.newPassObj = {
         travixPsgnrID : this.passengerIDInput.value,
         travixPsgnrName: this.passengerNameInput.value,
         from: this.travelsFromInput.value,
         to:this.travelsToInput.value,
         cost:this.travelCostInput.value
      }
      this.addPassengerList.push(this.newPassObj);
      this.setState({passengersList:this.addPassengerList});
      this.setState({newPassObj : {} });
      this.emptyFieldsAfterAdd();
    }
    updatePassenger(e){
      this.updatePassengerList = this.props.passDetails;
      this.newPassObj = {
        travixPsgnrID : this.passengerIDInput.value,
        travixPsgnrName: this.passengerNameInput.value,
        from: this.travelsFromInput.value,
        to:this.travelsToInput.value,
        cost:this.travelCostInput.value
     }
     for(let i=0;i< this.updatePassengerList.length;i++){
          if(this.updatePassengerList[i].travixPsgnrID === this.newPassObj.travixPsgnrID)
          {
            this.updatePassengerList[i].travixPsgnrID = this.newPassObj.travixPsgnrID;
            this.updatePassengerList[i].travixPsgnrName = this.newPassObj.travixPsgnrName;
            this.updatePassengerList[i].from = this.newPassObj.from;
            this.updatePassengerList[i].to = this.newPassObj.to;
            this.updatePassengerList[i].cost = this.newPassObj.cost;
            break;
          }
      }
      this.setState({passengersList:this.updatePassengerList});
      this.emptyFieldsAfterAdd();
    }
    deletePassenger(e){
      this.delPassengerList = this.props.passDetails;
      for(let i=0;i< this.delPassengerList.length;i++){
          if(this.delPassengerList[i].travixPsgnrID === this.selectedRowData.travixPsgnrID)
          {
            this.delPassengerList.splice(i,1);
            break;
          }
      }
      this.setState({passengersList:this.delPassengerList});
      this.emptyFieldsAfterAdd();
    }
  
    emptyFieldsAfterAdd(){
      document.getElementById('passngrID').value = '';
      document.getElementById('passngrName').value = '';
      document.getElementById('travelFrom').value = '';
      document.getElementById('travelTo').value = '';
      document.getElementById('travelCost').value = '';
    }
    myTableRowData(e){
      this.selectedRowData = {
        travixPsgnrID : e.currentTarget.cells[0].innerText,
        travixPsgnrName: e.currentTarget.cells[1].innerText,
        from: e.currentTarget.cells[2].innerText,
        to:e.currentTarget.cells[3].innerText,
        cost:e.currentTarget.cells[4].innerText
      }
    this.setState({selectedRowData : this.selectedRowData});
    this.assignRowDataToTextInputs();
    }
    assignRowDataToTextInputs(){
      document.getElementById('passngrID').value = this.selectedRowData.travixPsgnrID;
      document.getElementById('passngrName').value = this.selectedRowData.travixPsgnrName;
      document.getElementById('travelFrom').value = this.selectedRowData.from;
      document.getElementById('travelTo').value = this.selectedRowData.to;
      document.getElementById('travelCost').value = this.selectedRowData.cost;
    }
  
    render() {
      return (
        <div>
          <div>
            <Table id="passengerTable" responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th>Passenger ID</th>
                <th>Passenger Name</th>
                <th>Travelling From</th>
                <th>Travelling To</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
                {this.props.passDetails.map( function (pass, index) {
                  return (
                    <tr key={index} onClick={this.myTableRowData} class="success">
                      <td>{pass.travixPsgnrID}</td>
                      <td>{pass.travixPsgnrName}</td>
                      <td>{pass.from}</td>
                      <td>{pass.to}</td>
                      <td>{pass.cost}</td>
                    </tr>
                  );}.bind(this)
                 )}
            </tbody>
          </Table>;          
        </div>
        <div>
        <Form horizontal= "false">
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                  Passenger ID
              </Col>
              <Col sm={2}>
                <FormControl type="text" maxLength="4" placeholder="Passenger ID" id="passngrID"  inputRef={(ref) => {this.passengerIDInput = ref}}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                  Passenger Name
              </Col>
              <Col sm={2}>
                <FormControl type="text" maxLength="20" placeholder="Passenger Name" id="passngrName" inputRef={(ref) => {this.passengerNameInput = ref}}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                  Travelling From
              </Col>
              <Col sm={2}>
                <FormControl type="text" maxLength="20" placeholder="Travelling From" id="travelFrom" inputRef={(ref) => {this.travelsFromInput = ref}}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                  Travelling To
              </Col>
              <Col sm={2}>
                <FormControl type="text" maxLength="15" placeholder="Travelling To" id="travelTo" inputRef={(ref) => {this.travelsToInput = ref}}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                  Travelling Cost
              </Col>
              <Col sm={2}>
                <FormControl type="number" maxLength="5" placeholder="Travel Cost" id="travelCost" inputRef={(ref) => {this.travelCostInput = ref}}/>
              </Col>
            </FormGroup>
         </Form>
          </div>
        <div className = "buttons-div">
          <Button className = "button-align" title="Delete Passenger" onClick={this.deletePassenger}>Delete Passenger</Button>
          <Button className = "button-align" title="Update Passenger"onClick={this.updatePassenger} >Update Passenger</Button>
          <Button className = "button-align" title="Add Passenger" bsStyle="primary" onClick={this.addPassenger}>Add Passenger</Button>
        </div>
        </div>
      );
    }
  }
export default PassengerDataTable;