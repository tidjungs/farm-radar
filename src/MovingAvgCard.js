import React from 'react';

const MovingAvgCard = ({ name, mAvg, color }) => (
  <div>
    <div style={{ color }} />
    <div>{ name }</div>
    <div>{ mAvg }</div>
  </div>
);


export default MovingAvgCard;
