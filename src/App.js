/* eslint no-bitwise: [2, { int32Hint: true }] */

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { GridLoader } from 'halogen';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import PriceAverage from './view/PriceAverage';
import PriceCorrelation from './view/PriceCorrelation';
import PlantInfo from './view/PlantInfo';
import Search from './view/Search';
import './App.css';
import mapColorWithFarm from './utils/color';
// import test from './utils/loading';

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

const color = '#A0E9D4';

const styles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  paddingLeft: '60%',
  paddingTop: '15%',
  background: 'black',
  opacity: '0.6',
};

// const farm = [
//   { farm_id: 1, farm_name: 'ฟาม1', farm_avg: '40', active: true },
//   { farm_id: 2, farm_name: 'farm2', farm_avg: '35', active: true },
//   { farm_id: 3, farm_name: 'farm3', farm_avg: '35', active: true },
//   { farm_id: 4, farm_name: 'farm4', farm_avg: '60', active: true },
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'FARM RADAR',
      corr: false,
      loading: false,
      data: [
      //   { id: 1, name: 'JAN', type: 'week', ฟาม1: 4000, farm2: 2400, farm3: 1600, farm4: 3200 },
      //   { id: 2, name: 'FEB', type: 'week', ฟาม1: 3000, farm2: 1398, farm3: 1800, farm4: 2500 },
      //   { id: 3, name: 'MAR', type: 'week', ฟาม1: 2000, farm2: 9800, farm3: 2400, farm4: 1600 },
      //   { id: 4, name: 'APR', type: 'week', ฟาม1: 2780, farm2: 3908, farm3: 3600, farm4: 2500 },
      //   { id: 5, name: 'MAY', type: 'week', ฟาม1: 1890, farm2: 4800, farm3: 1700, farm4: 3300 },
      //   { id: 6, name: 'JUN', type: 'week', ฟาม1: 2390, farm2: 3800, farm3: 2200, farm4: 3000 },
      //   { id: 7, name: 'JUL', type: 'week', ฟาม1: 3490, farm2: 4300, farm3: 1300, farm4: 3200 },
      ],
      duration: [
        { id: 1, name: '1W', active: true, key: 'week' },
        { id: 2, name: '1M', active: false, key: 'month' },
        { id: 3, name: '6M', active: false, key: 'halfyear' },
        { id: 4, name: '1Y', active: false, key: 'year' },
        // { id: 5, name: '5Y', active: false, key: '5year' },
      ],
      corrData: [
        { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
      ],
      farm: [],
      searchText: '',
      productData: [
        { id: 854569, name: 'swine', active: true, suggest: true },
        { id: 920215, name: 'broiler', active: false, suggest: true },
        { id: 111185, name: 'eggs', active: false, suggest: true },
        { id: 446789, name: 'eggs3', active: false, suggest: true },
        { id: 446790, name: 'eggs4', active: false, suggest: true },
        { id: 11331, name: 'casava25', active: false, suggest: true },
        { id: 11357, name: 'casava30', active: false, suggest: true },
      ],
      productCorr: [
        { id: 854569, name: 'swine', active: true, suggest: true },
        { id: 920215, name: 'broiler', active: true, suggest: true },
        { id: 111185, name: 'eggs', active: false, suggest: true },
        { id: 446789, name: 'eggs3', active: false, suggest: true },
        { id: 446790, name: 'eggs4', active: false, suggest: true },
        { id: 11331, name: 'casava25', active: false, suggest: true },
        { id: 11357, name: 'casava30', active: false, suggest: true },
      ],
    };
  }
  componentWillMount() {
    this.loadData(854569);
  }
  async loadData(id) {
    this.setState({
      loading: true,
    });
    const response = await fetch(`https://shrouded-tundra-34049.herokuapp.com/price/${id}`);
    const res = await response.json();
    this.setState({
      data: res.data,
      farm: mapColorWithFarm(
        res.farm.map(f =>
          ({ ...f, active: true, farm_avg: `$${f.farm_avg | 0}` }),
        ),
      ),
      loading: false,
    });
  }
  selectProduct(id) {
    this.setState({
      productData: this.state.productData.map(data =>
        (data.id === id ? { ...data, active: true } : { ...data, active: false }),
      ),
    });
    this.loadData(id);
  }
  activeFarm(id) {
    this.setState({
      farm: this.state.farm.map(f =>
        (f.farm_id === id ? { ...f, active: !f.active } : f),
      ),
    });
  }

  changeDuration(index) {
    this.setState({
      duration: this.state.duration.map(d =>
        (d.id === index ? { ...d, active: true } : { ...d, active: false }),
      ),
    });
  }

  updateText(e) {
    this.setState({
      productData: this.state.productData.map(data =>
        (
          data.name.includes(e.target.value) ?
            { ...data, suggest: true } :
            { ...data, suggest: false }
        ),
      ),
      searchText: e.target.value,
    });
  }

  disCorr() {
    this.setState({
      corr: false,
    });
  }

  corr() {
    this.setState({
      corr: true,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <p>{ this.state.name }</p>
            <Link onClick={() => this.disCorr()} to="/"><p>Price</p></Link>
            <Link onClick={() => this.corr()} to="/corr"><p>Corr</p></Link>
            <Link onClick={() => this.disCorr()} to="/info"><p>Info</p></Link>
          </div>
          <div className="App-container">
            {
              this.state.loading &&
              <div style={styles}><GridLoader color={color} size={25} /></div>
            }
            <div className="sidebar-container">
              {
                this.state.corr ?
                  <Search
                    text={this.state.searchText}
                    updateText={e => this.updateText(e)}
                    productData={
                      this.state.productCorr.filter(
                        data => data.suggest,
                      )
                    }
                    selectProduct={id => this.selectProduct(id)}
                  />
                :
                  <Search
                    text={this.state.searchText}
                    updateText={e => this.updateText(e)}
                    productData={
                      this.state.productData.filter(
                        data => data.suggest,
                      )
                    }
                    selectProduct={id => this.selectProduct(id)}
                  />
              }
            </div>
            <PropsRoute
              exact path="/"
              component={PriceAverage}
              data={this.state.data.filter(d =>
                d.type === this.state.duration.filter(t => t.active)[0].key,
              )}
              farm={this.state.farm}
              activeFarm={id => this.activeFarm(id)}
              changeDuration={id => this.changeDuration(id)}
              duration={this.state.duration}
              loading={this.state.loading}
            />
            <PropsRoute
              exact path="/corr"
              component={PriceCorrelation}
              data={this.state.corrData}
            />
            <PropsRoute
              exact path="/info"
              component={PlantInfo}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
