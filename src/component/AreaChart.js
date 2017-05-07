import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({ data }) => (
  <AreaChart
    width={600} height={400} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
);

export default Chart;
