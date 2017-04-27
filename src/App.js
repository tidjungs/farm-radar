import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';
import mapColorWithFarm from './utils/color';
import MovingAvgCard from './MovingAvgCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'JAN', uv: 4000, pv: 2400 },
        { id: 2, name: 'FEB', uv: 3000, pv: 1398 },
        { id: 3, name: 'MAR', uv: 2000, pv: 9800 },
        { id: 4, name: 'APR', uv: 2780, pv: 3908 },
        { id: 5, name: 'MAY', uv: 1890, pv: 4800 },
        { id: 6, name: 'JUN', uv: 2390, pv: 3800 },
        { id: 7, name: 'JUL', uv: 3490, pv: 4300 },
      ],
      farm: [
        { id: 1, name: 'uv', mAvg: 4000, color: '#9b59b6' },
        { id: 2, name: 'pv', mAvg: 3500, color: '#e74c3c' },
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
        <div className="content-container">
          <div className="line-graph-container">
            <LineChart data={this.state.data} farm={mapColorWithFarm(this.state.farm)} />
          </div>
          <div className="moving-avg-container">
            {
              this.state.farm.map(f =>
                <MovingAvgCard
                  name={f.name}
                  color={f.color}
                  mAvg={f.mAvg}
                  key={f.id}
                />,
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
