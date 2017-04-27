import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';
import mapColorWithFarm from './utils/color';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'JAN', uv: 4000, pv: 2400 },
        { name: 'FEB', uv: 3000, pv: 1398 },
        { name: 'MAR', uv: 2000, pv: 9800 },
        { name: 'APR', uv: 2780, pv: 3908 },
        { name: 'MAY', uv: 1890, pv: 4800 },
        { name: 'JUN', uv: 2390, pv: 3800 },
        { name: 'JUL', uv: 3490, pv: 4300 },
      ],
      farm: [
        { name: 'uv' },
        { name: 'pv' },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LineChart data={this.state.data} farm={mapColorWithFarm(this.state.farm)} />
      </div>
    );
  }
}

export default App;
