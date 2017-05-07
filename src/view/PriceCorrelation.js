import React, { Component } from 'react';
import TimeSelect from '../component/TimeSelect';
import CorrelationChart from '../component/CorrelationChart';
import { filterData, correlationWord, correlationColor } from '../utils/correlation';
import './PriceCorelation.css';

class PriceCorrelation extends Component {
  constructor() {
    super();
    this.state = {
      duration: [
        { id: 1, name: '1W', active: true, key: 'week' },
        { id: 2, name: '1M', active: false, key: 'month' },
        { id: 3, name: '6M', active: false, key: 'halfyear' },
        { id: 4, name: '1Y', active: false, key: 'year' },
      ],
    };
  }
  changeDuration(index) {
    this.setState({
      duration: this.state.duration.map(d =>
        (d.id === index ? { ...d, active: true } : { ...d, active: false }),
      ),
    });
  }

  render() {
    const key = this.state.duration.filter(d => d.active)[0].key;
    const val = Math.round(this.props.corrValue[`corr_${key}`] * 10) / 10;
    return (
      <div className="content-container">
        <TimeSelect
          duration={this.state.duration}
          changeDuration={index => this.changeDuration(index)}
        />
        <div className="chart-container">
          <CorrelationChart
            data={filterData(this.props.data, key)}
            name={this.props.name}
          />
        </div>
        <div className="correlation-data-container">
          <div className="correlation-data" style={{ borderColor: correlationColor(val) }}>
            <p>{ val }</p>
          </div>
          <div className="correlation-data" style={{ borderColor: correlationColor(val) }}>
            <p>{ correlationWord(val) }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceCorrelation;
