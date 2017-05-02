import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default FarmInfo;
