import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data, active }) => (
  <ResponsiveContainer width="90%" height={400}>
    <AreaChart
      data={data}
      margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
    >
      <XAxis
        dataKey="year"
        stroke="#e0e0e0"
        tick={{ transform: 'translate(0, 10)' }}
      />
      <YAxis
        stroke="#e0e0e0"
      />
      <Tooltip
        wrapperStyle={{
          background: '#262833',
          border: 0,
          borderRadius: '10px',
          color: '#fff',
        }}
      />
      <Area type="monotone" dataKey={active} stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default Chart;
