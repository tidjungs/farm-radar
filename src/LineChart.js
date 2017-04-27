import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({ data }) => (
  <LineChart
    width={600} height={300} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis
      dataKey="name"
      padding={{ left: 30, right: 30 }}
      stroke="#fff"
      tick={{ transform: 'translate(0, 10)' }}
    />
    <YAxis
      stroke="#fff"
      tick={{ transform: 'translate(-10, 0)' }}
    />
    <Tooltip
      wrapperStyle={{
        background: '#262833',
        border: 0,
        borderRadius: '10px',
        color: '#fff',
      }}
    />
    <Line
      type="monotone"
      dataKey="pv"
      stroke="#f1c40f"
      activeDot={{ r: 8 }}
      strokeWidth={2}
    />
    <Line
      type="monotone"
      dataKey="uv"
      stroke="#2ecc71"
      activeDot={{ r: 8 }}
      strokeWidth={2}
    />
  </LineChart>
);


export default Chart;
