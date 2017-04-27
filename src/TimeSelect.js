import React from 'react';

const TimeSelect = ({ duration }) => (
  <div className="time-select">
    {
      duration.map(d =>
        <button
          style={d.active ?
            { background: '#e0e0e0', color: 'none' } :
            { background: 'none', color: '#e0e0e0' }}
          key={d.id}
        >
          { d.name }
        </button>,
      )
    }
  </div>
);

export default TimeSelect;
