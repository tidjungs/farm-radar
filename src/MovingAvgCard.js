import React from 'react';

const MovingAvgCard = ({ name, mAvg, color }) => (
  <div className="moving-avg-card">
    <div className="moving-avg-card-inside">
      <div className="top">
        <div className="name">
          <div className="icon" style={{ background: color }} />
          { name }
        </div>
      </div>
      <div className="bottom">
        <div className="m-avg">{ mAvg }</div>
      </div>
    </div>
  </div>
);


export default MovingAvgCard;
