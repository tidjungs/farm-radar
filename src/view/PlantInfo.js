import React, { Component } from 'react';
import AreaChart from '../component/AreaChart';
import { loadProvince } from '../request';


class FarmInfo extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
      ],
      info: [
        { id: 0, name: 'plantarea', active: true },
        { id: 1, name: 'harvestarea', active: true },
        { id: 2, name: 'goods', active: true },
      ],
      province: [{ id: 0, name: 'select province' }],
    };
  }

  async componentWillMount() {
    const province = await loadProvince();
    this.setState({
      province: [...this.state.province, ...province],
    });
  }

  selectProvince(e) {
    console.log(e.target.value);
    this.setState({
      test: 123,
    });
  }

  render() {
    return (
      <div>
        <select onChange={e => this.selectProvince(e)}>
          {
            this.state.province.map(pv =>
              <option key={pv.id} value={pv.id}>{ pv.name }</option>,
            )
          }
        </select>
        <div className="info-select">
          {
            this.state.info.map(i =>
              <div key={i.id}>
                <button>
                  {i.name}
                </button>
              </div>,
            )
          }
        </div>
        <AreaChart data={this.state.data} />
      </div>
    );
  }
}

export default FarmInfo;
