import React from 'react';
import './Info.css';
import { Link } from 'react-router-dom'
import ECharts from 'echarts-for-react';
import detailImg from './detail.png'
import girlImg from './girl.png'
import logoutImg from './logout.png'

const Option1 = {
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
      name: '温度(摄氏度)',
      type: 'value',
      max: 50,
  },
  series: [{
      data: [11, 10, 9, 7, 8, 9, 10],
      type: 'line',
      smooth: true
  }]
};

const Option2 = {
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
      data: [51, 53, 52, 64, 64, 75, 80],
      type: 'line',
      smooth: true
  }]
};


class Info extends React.Component{

  state = {
    curTime: ''
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
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
            <div style={{paddingLeft: '50px'}}>当前温度：15 摄氏度</div>
            <div style={{paddingLeft: '10%'}}>当前湿度：70%</div>
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
