import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import PriceAverage from './view/PriceAverage';
import PriceCorrelation from './view/PriceCorrelation';
import './App.css';
import mapColorWithFarm from './utils/color';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const PropsRoute = ({ component, ...rest }) =>
(
  <Route
    {...rest} render={
    routeProps => renderMergedProps(component, routeProps, rest)}
  />
);

const farm = [
  { id: 1, name: 'farm1', mAvg: '$40', active: true },
  { id: 2, name: 'farm2', mAvg: '$35', active: true },
  { id: 3, name: 'farm3', mAvg: '$35', active: true },
  { id: 4, name: 'farm4', mAvg: '$60', active: true },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'FARM RADAR',
      data: [
        { id: 1, name: 'JAN', farm1: 4000, farm2: 2400, farm3: 1600, farm4: 3200 },
        { id: 2, name: 'FEB', farm1: 3000, farm2: 1398, farm3: 1800, farm4: 2500 },
        { id: 3, name: 'MAR', farm1: 2000, farm2: 9800, farm3: 2400, farm4: 1600 },
        { id: 4, name: 'APR', farm1: 2780, farm2: 3908, farm3: 3600, farm4: 2500 },
        { id: 5, name: 'MAY', farm1: 1890, farm2: 4800, farm3: 1700, farm4: 3300 },
        { id: 6, name: 'JUN', farm1: 2390, farm2: 3800, farm3: 2200, farm4: 3000 },
        { id: 7, name: 'JUL', farm1: 3490, farm2: 4300, farm3: 1300, farm4: 3200 },
      ],
      duration: [
        { id: 1, name: '1W', active: true },
        { id: 2, name: '1M', active: false },
        { id: 3, name: '1Y', active: false },
        { id: 4, name: '2Y', active: false },
        { id: 5, name: '5Y', active: false },
      ],
      farm: mapColorWithFarm(farm),
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <p>{ this.state.name }</p>
            <li><Link to="/">Price</Link></li>
            <li><Link to="/corr">Corr</Link></li>
          </div>
          <div className="App-container">
            <div className="sidebar-container" />
            <PropsRoute
              exact path="/"
              component={PriceAverage}
              data={this.state.data}
              farm={farm}
            />
            <PropsRoute
              exact path="/corr"
              component={PriceCorrelation}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
