import React, { Component } from 'react';
import AreaChart from '../component/AreaChart';

class FarmInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'farm',
    };
  }

  render() {
    return (
      <div>
        { this.state.name }
        <AreaChart />
      </div>
    );
  }
}

export default FarmInfo;
