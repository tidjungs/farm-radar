import React from 'react';

const MovingAvgCard = ({ name, mAvg, color, activeFarm, id }) => (
  <div className="moving-avg-card" onClick={() => activeFarm(id)}>
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
