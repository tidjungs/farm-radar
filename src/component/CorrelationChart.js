import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
];

const CorrelationChart = () => (
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
          color: '#fff',
        }}
      />
    </ScatterChart>
  </ResponsiveContainer>
);

export default CorrelationChart;
