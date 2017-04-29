import React from 'react';

const TimeSelect = ({ duration, changeDuration }) => (
  <div className="time-select">
    {
      duration.map(d =>
        <button
          style={d.active ?
            { background: '#e0e0e0', color: '#484856' } :
            { background: '#484856', color: '#e0e0e0' }}
          key={d.id}
          onClick={() => changeDuration(d.id)}
        >
          { d.name }
        </button>,
      )
    }
  </div>
);

export default TimeSelect;
