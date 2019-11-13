import React from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'
import './Login.css';
import loginImg from './login (1).png'

class Login extends React.Component{
  constructor(props){
    super()
    this.state = {
      errState: 'none'
    }
  }
  jump = () => {
    axios.post('http://localhost:8080/login', { id: document.getElementById('id').value, password: document.getElementById('password').value })
      .then(res => {
        if(res.data.er_code === 0) {
          this.props.history.push('/info')
        } else {
          this.setState({
            errState: 'block'
          })
        }
      })
  }
  render() {
    return (
      <div className="App">
        <div className='img' align='center'>
          <img style={{height: '80px', width: '80px', paddingTop: '200px'}} src={loginImg} alt='' />
        </div>
        <div className='form' align='center'>
          {/* <form> */}
            <span>账号:&nbsp;</span><input id='id' style={{height: '30px', width: '200px'}} type='text' name='账号' /><br/>
            <span>密码:&nbsp;</span><input id='password' style={{height: '30px', width: '200px', marginTop: '20px'}} type='password' name='密码' />
            <div style={{position: 'relative', height: '30px', width: '50px', marginTop: '30px'}}>
              {/* <button style={{height: '100%', width: '100%'}}>提交<Link className='linkMask' to='../info' /></button> */}
              <button style={{height: '100%', width: '100%'}} onClick={this.jump}>提交</button>
            </div>
            <div style={{ display:this.state.errState, color: 'red' }}>账号或密码错误！</div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default Login;
