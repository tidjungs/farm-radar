import React, { Component } from 'react';
import './App.css';
import LineChart from './LineChart';
import mapColorWithFarm from './utils/color';
import MovingAvgCard from './MovingAvgCard';

const farm = [
  { id: 1, name: 'farm1', mAvg: '$4000', color: '#9b59b6', active: true },
  { id: 2, name: 'farm2', mAvg: '$3500', color: '#e74c3c', active: true },
  { id: 3, name: 'farm3', mAvg: '$3500', color: '#2ecc71', active: true },
  { id: 4, name: 'farm4', mAvg: '$6000', color: '#f1c40f', active: true },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'JAN', farm1: 4000, farm2: 2400, farm3: 1600, farm4: 3200 },
        { id: 2, name: 'FEB', farm1: 3000, farm2: 1398, farm3: 1800, farm4: 2500 },
        { id: 3, name: 'MAR', farm1: 2000, farm2: 9800, farm3: 2400, farm4: 1600 },
        { id: 4, name: 'APR', farm1: 2780, farm2: 3908, farm3: 3600, farm4: 2500 },
        { id: 5, name: 'MAY', farm1: 1890, farm2: 4800, farm3: 1700, farm4: 3300 },
        { id: 6, name: 'JUN', farm1: 2390, farm2: 3800, farm3: 2200, farm4: 3000 },
        { id: 7, name: 'JUL', farm1: 3490, farm2: 4300, farm3: 1300, farm4: 3200 },
      ],
      farm: mapColorWithFarm(farm),
    };
  }

  activeFarm(index) {
    this.setState({
      farm: this.state.farm.map(f =>
        (f.id === index ? { ...f, active: !f.active } : f),
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          FARM RADAR
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="content-container">
          <div className="line-graph-container">
            <LineChart data={this.state.data} farm={mapColorWithFarm(this.state.farm)} />
          </div>
          <h1>MOVING AVERAGE</h1>
          <br />
          <div className="moving-avg-container">
            {
              this.state.farm.map(f =>
                <MovingAvgCard
                  name={f.name}
                  color={f.color}
                  mAvg={f.mAvg}
                  key={f.id}
                  id={f.id}
                  active={f.active ? 1 : 0.4}
                  activeFarm={index => this.activeFarm(index)}
                />,
              )
            }
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
