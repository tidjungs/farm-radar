import React from 'react';
import './PriceAverage.css';
// component
import LineChart from '../component/LineChart';
import MovingAvgCard from '../component/MovingAvgCard';
import TimeSelect from '../component/TimeSelect';

class PriceAverage extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (!nextProps.loading && this.props.loading) ||
      (nextProps.duration !== this.props.duration) ||
      (nextProps.farm !== this.props.farm);
  }
  render() {
    const { duration, changeDuration, farm, data, activeFarm } = this.props;
    return (<div className="content-container">
      <TimeSelect
        duration={duration}
        changeDuration={index => changeDuration(index)}
      />
      <div className="line-graph-container">
        <LineChart data={data} farm={farm} />
      </div>
      <div className="moving-avg-container">
        {
          farm.map(f =>
            <MovingAvgCard
              name={f.farm_name}
              color={f.color}
              mAvg={f[`farm_avg_${duration.filter(d => d.active)[0].key}`]}
              key={f.farm_id}
              id={f.farm_id}
              active={f.active ? 1 : 0.4}
              activeFarm={() => activeFarm(f.farm_id)}
            />,
          )
        }
      </div>
    </div>);
  }
}

export default PriceAverage;
