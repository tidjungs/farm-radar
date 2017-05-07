/* eslint no-bitwise: [2, { int32Hint: true }] */
/* eslint-disable camelcase*/

import React, { Component } from 'react';
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
import getName from './utils/name';
import { loadCorrData, loadPriceData, loadProvince, loadInfoData } from './request';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'FARM RADAR',
      corr: false,
      loading: false,
      data: [],
      infoData: [],
      provinceTargetId: '0',
      province: [{ id: 0, name: 'select province' }],
      duration: [
        { id: 1, name: '1W', active: true, key: 'week' },
        { id: 2, name: '1M', active: false, key: 'month' },
        { id: 3, name: '6M', active: false, key: 'halfyear' },
        { id: 4, name: '1Y', active: false, key: 'year' },
      ],
      corrData: [],
      keyX: 'x',
      keyY: 'y',
      farm: [],
      searchText: '',
      searchCorrText: '',
      productData: [
        { id: 854569, name: 'swine', active: true, suggest: true },
        { id: 920215, name: 'broiler', active: false, suggest: true },
        { id: 111185, name: 'eggs', active: false, suggest: true },
        { id: 446789, name: 'eggs3', active: false, suggest: true },
        { id: 446790, name: 'eggs4', active: false, suggest: true },
        { id: 11331, name: 'casava25', active: false, suggest: true },
        { id: 11357, name: 'casava30', active: false, suggest: true },
      ],
      selectedCorr: [854569, 920215],
      productCorr: [
        { id: 854569, name: 'swine', active: true, suggest: true },
        { id: 920215, name: 'broiler', active: true, suggest: true },
        { id: 111185, name: 'eggs', active: false, suggest: true },
        { id: 446789, name: 'eggs3', active: false, suggest: true },
        { id: 446790, name: 'eggs4', active: false, suggest: true },
        { id: 11331, name: 'casava25', active: false, suggest: true },
        { id: 11357, name: 'casava30', active: false, suggest: true },
      ],
      corrValue: {
        corr_week: 0,
        corr_month: 9,
        corr_halfyear: 0,
        corr_year: 0,
      },
    };
  }
  componentWillMount() {
    this.loadData(854569);
    this.loadProvince();
  }
  async selectProvince(e) {
    const id = e.target.value;
    this.setState({
      loading: true,
      provinceTargetId: id,
    });
    if (id !== 0) {
      const data = await loadInfoData(id, this.state.productData.filter(p => p.active)[0].id);
      this.setState({
        infoData: data,
        loading: false,
      });
    }
  }
  async loadProvince() {
    const province = await loadProvince();
    this.setState({
      province: [...this.state.province, ...province],
    });
  }

  async loadData(id) {
    this.setState({
      loading: true,
    });
    const res = await loadPriceData(id);
    this.setState({
      data: res.data,
      farm: mapColorWithFarm(
        res.farm.map(f =>
          ({ ...f, active: true }),
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
    const keyText = this.state.corr ? 'searchCorrText' : 'searchText';
    const key = this.state.corr ? 'productCorr' : 'productData';
    const target = this.state.corr ? this.state.productCorr : this.state.productData;
    this.setState({
      [key]: target.map(data =>
        (
          data.name.includes(e.target.value) ?
            { ...data, suggest: true } :
            { ...data, suggest: false }
        ),
      ),
      [keyText]: e.target.value,
    });
  }
  async loadCorr() {
    this.setState({
      loading: true,
    });
    const [a, b] = this.state.selectedCorr;
    const { data, corr } = await loadCorrData(a, b);
    this.setState({
      loading: false,
      corrData: data,
      corrValue: corr,
    });
  }
  async selectCorr(id) {
    const selectedCorr = this.state.selectedCorr;
    selectedCorr.shift();
    selectedCorr.push(id);
    this.setState({
      loading: true,
      selectedCorr,
      productCorr: this.state.productCorr.map(c =>
        (selectedCorr.includes(c.id) ? { ...c, active: true } : { ...c, active: false }),
      ),
    });
    this.loadCorr();
  }

  disCorr() {
    this.setState({
      corr: false,
    });
  }

  corr() {
    this.loadCorr();
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
            <Link onClick={() => this.disCorr()} to="/farm-radar"><p>Price</p></Link>
            <Link onClick={() => this.corr()} to="/farm-radar/corr"><p>Corr</p></Link>
            <Link onClick={() => this.disCorr()} to="/farm-radar/info"><p>Info</p></Link>
          </div>
          <div className="App-container">
            {
              this.state.loading &&
              <div style={styles}>
                <GridLoader color={color} size={25} />
              </div>
            }
            <div className="sidebar-container">
              {
                this.state.corr ?
                  <Search
                    text={this.state.searchCorrText}
                    updateText={e => this.updateText(e)}
                    productData={
                      this.state.productCorr.filter(
                        data => data.suggest,
                      )
                    }
                    selectProduct={id => this.selectCorr(id)}
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
              exact path="/farm-radar"
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
              exact path="/farm-radar/corr"
              corrValue={this.state.corrValue}
              component={PriceCorrelation}
              data={this.state.corrData}
              name={getName(this.state.productCorr, this.state.selectedCorr)}
            />
            <PropsRoute
              exact path="/farm-radar/info"
              component={PlantInfo}
              data={this.state.infoData}
              targetId={this.state.provinceTargetId}
              province={this.state.province}
              selectProvince={e => this.selectProvince(e)}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
