import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CorrelationChart = ({ data }) => (
  <ResponsiveContainer width="50%" height={400}>
    <ScatterChart
      margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
    >
      <XAxis
        dataKey={'x'}
        name="product1"
        unit="baht"
        stroke="#e0e0e0"
        tick={{ transform: 'translate(0, 10)' }}
      />
      <YAxis
        dataKey={'y'}
        name="product2"
        unit="baht"
        stroke="#e0e0e0"
        tick={{ transform: 'translate(-10, 0)' }}
      />

      <Scatter
        name="A school"
        data={data}
        fill="#DFBA50"
      />
      <Tooltip
        wrapperStyle={{
          background: '#262833',
          border: 0,
          borderRadius: '10px',
        }}
        itemStyle={{
          color: '#DFBA50',
        }}
      />
    </ScatterChart>
  </ResponsiveContainer>
);

export default CorrelationChart;
