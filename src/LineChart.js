import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'JAN', uv: 4000, pv: 2400 },
  { name: 'FEB', uv: 3000, pv: 1398 },
  { name: 'MAR', uv: 2000, pv: 9800 },
  { name: 'APR', uv: 2780, pv: 3908 },
  { name: 'MAY', uv: 1890, pv: 4800 },
  { name: 'JUN', uv: 2390, pv: 3800 },
  { name: 'JUL', uv: 3490, pv: 4300 },
];

const Chart = () => (
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
