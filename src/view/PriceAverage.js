import React, { Component } from 'react';
import './PriceAverage.css';
// component
import LineChart from '../component/LineChart';
import MovingAvgCard from '../component/MovingAvgCard';
import TimeSelect from '../component/TimeSelect';

// action
import mapColorWithFarm from '../utils/color';

class PriceAverage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farm: mapColorWithFarm(props.farm),
      duration: [
        { id: 1, name: '1W', active: true },
        { id: 2, name: '1M', active: false },
        { id: 3, name: '1Y', active: false },
        { id: 4, name: '2Y', active: false },
        { id: 5, name: '5Y', active: false },
      ],
      data: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      farm: mapColorWithFarm(nextProps.farm),
    });
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

  render() {
    return (
      <div className="content-container">
        <TimeSelect
          duration={this.state.duration}
          changeDuration={index => this.changeDuration(index)}
        />
        <div className="line-graph-container">
          <LineChart data={this.state.data} farm={this.state.farm} />
        </div>
        <div className="moving-avg-container">
          {
            this.state.farm.map(f =>
              <MovingAvgCard
                name={f.name}
                color={f.color}
                mAvg={f.farm_avg}
                key={f.farm_id}
                id={f.farm_id}
                active={f.active ? 1 : 0.4}
                activeFarm={() => this.activeFarm(f.farm_id)}
              />,
            )
          }
        </div>
      </div>
    );
  }
}

export default PriceAverage;
