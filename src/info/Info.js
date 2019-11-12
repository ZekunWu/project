import React from 'react';
import axios from 'axios'
import './Info.css';
import { Link } from 'react-router-dom'
import ECharts from 'echarts-for-react';
import detailImg from './detail.png'
import girlImg from './girl.png'
import logoutImg from './logout.png'

class Info extends React.Component{

  state = {
    curTime: '',
    temper: 0,
    humid: 0,
    timeArray: [],
    temperArray: [],
    humidArray: []
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleString()
      })
    }, 1000)
    axios.post('http://localhost:8080/info')
      .then(res => {
        // console.log(res)
        this.setState({
          temper: res.oj.temperature,
          humid: res.oj.humidity,
          timeArray: res.oj.times,
          temperArray: res.oj.tems,
          humidArray: res.oj.hums
        })
      })
  }

  render() {

    let Option1 = {
      xAxis: {
          type: 'category',
          boundaryGap : false,
          axisLine: {onZero: false},
          data : this.state.timeArray.map(function (str) {
              return str.replace(' ', '\n')
          })
      },
      yAxis: {
          name: '温度(摄氏度)',
          type: 'value',
          max: 50,
      },
      series: [{
          data: this.state.temperArray,
          type: 'line',
          smooth: true
      }]
    };

    let Option2 = {
      xAxis: {
          type: 'category',
          boundaryGap : false,
          axisLine: {onZero: false},
          data : [
              '2019/10/28 0:00', '2019/10/28 1:00', '2019/10/28 2:00', '2019/10/28 3:00', '2019/10/28 4:00', '2019/10/28 5:00', '2019/10/28 6:00'
          ].map(function (str) {
              return str.replace(' ', '\n')
          })
      },
      yAxis: {
          name: '湿度（%）',
          type: 'value',
          max: 100,
      },
      series: [{
          data: this.state.humidArray,
          type: 'line',
          smooth: true
      }]
    };
    

    return (
      <div className="page">
          <div className='headerInfo'>
            <div className='welcome'>欢迎你，用户xxx</div>
            <div className='welcome'>当前时间是：{this.state.curTime}</div>
            <div className='out'>
                <img style={{ position: 'relative', height: '100%', width: '100%' }} src={logoutImg} alt='' />
                <Link className='linkMask' to='../' />
            </div>
            <div className='tips1'>退出登录</div>
          </div>
          <div className='detail'>
            <div style={{paddingLeft: '50px'}}>当前温度：{this.state.temper} 摄氏度</div>
            <div style={{paddingLeft: '10%'}}>当前湿度：{this.state.humid} %</div>
            <div className='jump' >
              <div>
                <img style={{height: '50px', width: '50px'}} src={detailImg} alt='' />
              </div>
              <div className='tips'>查看详情</div>
              <Link className='linkMask' to='../detail' />
            </div>
          </div>
          <div className='chart'>
            <ECharts option={Option1} />
          </div>          
          <div className='chart'>
            <ECharts option={Option2} />
          </div>
          <div className='girl'>
            <img style={{ height: '100%', width: 'auto'}} src={girlImg} alt='' />
          </div>
          <div className='words' align='center'>
            <span className='middle'></span>
            <span className='little'></span>
            气温较低，主人要注意保暖哦！
          </div>
      </div>
    );
  }
}

export default Info;
