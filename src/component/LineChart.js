/* eslint-disable camelcase*/
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data, farm }) => (
  <ResponsiveContainer width="90%" height={400}>
    <LineChart
      data={data}
      margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
    >
      <XAxis
        dataKey="name"
        padding={{ left: 30, right: 30 }}
        stroke="#e0e0e0"
        tick={{ transform: 'translate(0, 10)' }}
      />
      <YAxis
        stroke="#e0e0e0"
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

        farm.map(({ farm_id, farm_name, color, active }) =>
          active &&
          <Line
            key={farm_id}
            type="monotone"
            dataKey={farm_name}
            stroke={color}
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />,
        )
      }
    </LineChart>
  </ResponsiveContainer>
);


export default Chart;
