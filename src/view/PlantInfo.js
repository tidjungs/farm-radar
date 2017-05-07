import React, { Component } from 'react';
import AreaChart from '../component/AreaChart';
import { loadProvince, loadInfoData } from '../request';
import './PlantInfo.css';

class FarmInfo extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { year: '2013', plantarea: 4000, pv: 2400, amt: 2400, harvestarea: 3000, goods: 2000 },
        { year: '2014', plantarea: 3000, pv: 1398, amt: 2210, harvestarea: 2000, goods: 3000 },
        { year: '2015', plantarea: 2000, pv: 9800, amt: 2290, harvestarea: 1000, goods: 3000 },
        { year: '2016', plantarea: 2780, pv: 3908, amt: 2000, harvestarea: 2000, goods: 2000 },
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

  async selectProvince(e) {
    const id = e.target.value;
    this.setState({
      provinceTargetId: id,
    });
    if (e.target.value !== 0) {
      // const data = await loadInfoData(id, this.props.productId);
      const data = await loadInfoData(19853, 11331);
      this.setState({
        data,
      });
    }
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
          <AreaChart
            data={this.state.data}
            active={this.state.info.filter(i => i.active)[0].value}
          />
        </div>
      </div>
    );
  }
}

export default FarmInfo;
