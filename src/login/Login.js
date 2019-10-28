import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends React.Component{
  render() {
    return (
      <div className="App">
        <div className='jump'>
          <Link className='linkMask' to='../info' />
          跳转
        </div>
      </div>
    );
  }
}

export default Login;
