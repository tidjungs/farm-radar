import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>FARM RADAR</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LineChart />
      </div>
    );
  }
}

export default App;
