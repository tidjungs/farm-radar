import React from 'react';
import './PriceAverage.css';
// component
import LineChart from '../component/LineChart';
import MovingAvgCard from '../component/MovingAvgCard';
import TimeSelect from '../component/TimeSelect';

const PriceAverage = ({ duration, data, farm, changeDuration, activeFarm }) => (
  <div className="content-container">
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
            name={f.name}
            color={f.color}
            mAvg={f.farm_avg}
            key={f.farm_id}
            id={f.farm_id}
            active={f.active ? 1 : 0.4}
            activeFarm={() => activeFarm(f.farm_id)}
          />,
        )
      }
    </div>
  </div>
);
export default PriceAverage;
