import React, { Component } from 'react';
import TimeSelect from '../component/TimeSelect';
import CorrelationChart from '../component/CorrelationChart';
import './PriceCorelation.css';

class PriceCorrelation extends Component {
  constructor() {
    super();
    this.state = {
      duration: [
        { id: 1, name: '1W', active: true },
        { id: 2, name: '1M', active: false },
        { id: 3, name: '1Y', active: false },
        { id: 4, name: '2Y', active: false },
        { id: 5, name: '5Y', active: false },
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
    return (
      <div className="content-container">
        <TimeSelect
          duration={this.state.duration}
          changeDuration={index => this.changeDuration(index)}
        />
        <div className="correlation-chart-container">
          <CorrelationChart />
        </div>
        <div className="correlation-data-container">
          <div className="correlation-data">
            <p>0.9</p>
          </div>
          <div className="correlation-data">
            <p>positive corelation</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceCorrelation;
