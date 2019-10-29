import React from 'react';
import './Info.css';
import { Link } from 'react-router-dom'
import backImg from './back.png'
import detailImg from './detail.png'
import girlImg from './girl.png'

class Info extends React.Component{
  render() {
    return (
      <div className="page">
          <div className='header'>
              <div className='back'>
                  <img style={{ position: 'relative', height: '100%', width: '100%' }} src={backImg} alt='' />
                  <Link className='linkMask' to='../' />
              </div>
          </div>
          <div className='detail'>
            <p style={{paddingLeft: '20%'}}>当前温度：15 摄氏度</p>
            <p style={{paddingLeft: '20%'}}>当前湿度：70%</p>
            <div className='jump' >
              <div>
                <img style={{height: '50px', width: '50px'}} src={detailImg} alt='' />
              </div>
              <div className='tips'>查看详情</div>
              <Link className='linkMask' to='../detail' />
            </div>
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
