import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import AreaChart from '../component/AreaChart';
import './PlantInfo.css';

class FarmInfo extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        { id: 0, name: 'Plant Area', active: true, value: 'plantarea' },
        { id: 1, name: 'Harvest Area', active: false, value: 'harvestarea' },
        { id: 2, name: 'Goods', active: false, value: 'goods' },
      ],
    };
  }
  changeInfo(id) {
    this.setState({
      info: this.state.info.map(i =>
        (i.id === id ? { ...i, active: true } : { ...i, active: false }),
      ),
    });
  }
  render() {
    const message = (this.props.targetId === '0') ? 'กรุณาเลือกจังหวัด' : 'ไม่พบข้อมูล';
    const selectProvince = this.props.province.filter(p => p.id === this.props.targetId);
    return (
      <div className="content-container">
        <div className="info-topbar">
          <Select
            className="province"
            value={selectProvince.lenght > 0 && selectProvince[0].name}
            name="form-field-name"
            options={this.props.province.map(p => ({ val: p.id, label: p.name }))}
            onChange={val => this.props.selectProvince(val)}
          />
          {/* <select className="province" onChange={e => this.props.selectProvince(e)}>
            {
              this.props.province.map(pv =>
                <option
                  key={pv.id}
                  value={pv.id}
                >
                  { pv.name }
                </option>,
              )
            }
          </select>*/}
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
        {
          (this.props.data.length > 0) ?
            <div className="chart-container">
              <AreaChart
                data={this.props.data}
                active={this.state.info.filter(i => i.active)[0].value}
              />
            </div>
          :
            <div className="message-info"><h1>{ message }</h1></div>
        }
      </div>
    );
  }
}

export default FarmInfo;
