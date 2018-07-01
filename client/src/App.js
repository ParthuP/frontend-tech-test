import React, { Component } from 'react';
import './App.css';
import store from './Components/store';
import { Provider } from 'react-redux';
import Passengers from './Components/Passengers/Passenger';

class App extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <Provider store = { store }>
      <div className="App">
      <header className="App-header">
          <h1 className="App-title">Travix Passenger Application</h1>
        </header>
        <Passengers/>
      </div>
      </Provider>
    );
  }
}
export default App;
