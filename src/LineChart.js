import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({ data, farm }) => (
  <LineChart
    width={600} height={400} data={data}
    margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
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
    {
      farm.map(({ id, name, color }) =>
        <Line
          key={id}
          type="monotone"
          dataKey={name}
          stroke={color}
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />,
      )
    }
  </LineChart>
);


export default Chart;
