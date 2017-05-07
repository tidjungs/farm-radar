import React, { Component } from 'react';
import AreaChart from '../component/AreaChart';
import { loadProvince } from '../request';
import './PlantInfo.css';

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
        { id: 0, name: 'Plant Area', active: true, value: 'plantarea' },
        { id: 1, name: 'Harvest Area', active: false, value: 'harvestarea' },
        { id: 2, name: 'Goods', active: false, value: 'goods' },
      ],
      provinceTargetId: '0',
      province: [{ id: 0, name: 'select province' }],
    };
  }

  async componentWillMount() {
    const province = await loadProvince();
    this.setState({
      province: [...this.state.province, ...province],
    });
  }
  changeInfo(id) {
    this.setState({
      info: this.state.info.map(i =>
        (i.id === id ? { ...i, active: true } : { ...i, active: false }),
      ),
    });
  }

  selectProvince(e) {
    this.setState({
      provinceTargetId: e.target.value,
    });
  }

  render() {
    return (
      <div className="content-container">
        <div className="info-topbar">
          <select className="province" onChange={e => this.selectProvince(e)}>
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
                  {
                    i.active ?
                      <button
                        style={{ background: '#e0e0e0', color: '#354459' }}
                        onClick={() => this.changeInfo(i.id)}
                      >{i.name}</button> :
                      <button
                        style={{ background: '#354459', color: '#e0e0e0' }}
                        onClick={() => this.changeInfo(i.id)}
                      >{i.name}</button>
                  }
                </div>,
              )
            }
          </div>
        </div>
        <div className="chart-container">
          <AreaChart data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default FarmInfo;
