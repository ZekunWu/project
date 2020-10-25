import React from 'react';
import axios from 'axios';
import imgPath from '../../utils/imgPath';
// import Loading from '../../component/Loading';
import styles from './index.module.css';

class Login extends React.Component{
  constructor(props){
    super()
    this.state = {
      errState: 'none',
      imgArray: new Array(6).fill(0),
    }
    //初次进入鼠标监听的x位置
    this.initialX = null
  }

  jump = () => {
    axios.post('http://47.100.118.78:8080/login', { id: document.getElementById('id').value, password: document.getElementById('password').value })
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

  componentDidMount() {
    console.log(document)
    document.getElementById('banner').addEventListener("mousemove", (e) => {
      this.initialX = this.initialX || e.offsetX
      let deltaX = e.offsetX - this.initialX
      document.getElementById('banner1').style.filter = `blur(${deltaX / window.innerWidth * 10}px)`
      document.getElementById('banner4').style.filter = `blur(${Math.abs(5 - deltaX / window.innerWidth * 20)}px)`
      document.getElementById('banner4').style.transform = `translate(${deltaX / 10}px)`
      document.getElementById('banner2').style.transform = `translate(${deltaX / 12}px)`
      document.getElementById('banner3').style.transform = `translate(${deltaX / 14}px)`
      document.getElementById('banner5').style.transform = `translate(${deltaX / 16}px)`
    })
    document.getElementById('banner').addEventListener("mouseout", () => {
      this.initialX = null
      document.getElementById('banner0').style.filter = 'blur(4px)'
      document.getElementById('banner1').style.filter = 'blur(0px)'
      document.getElementById('banner2').style.filter = 'blur(1px)'
      document.getElementById('banner3').style.filter = 'blur(4px)'
      document.getElementById('banner4').style.filter = 'blur(5px)'
      document.getElementById('banner5').style.filter = 'blur(6px)'
      document.getElementById('banner4').style.transform = 'translate(0px)'
      document.getElementById('banner2').style.transform = 'translate(0px)'
      document.getElementById('banner3').style.transform = 'translate(0px)'
      document.getElementById('banner5').style.transform = 'translate(0px)'
    })
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.banner} id="banner">
          {this.state.imgArray.map((value, index) => 
            <div className={styles['bannerItem' + index]} key={index} id={`banner${index}`}>
              <img style={{height: '100%', width: 'auto'}} src={imgPath(`bg${index + 1}.png`)} alt={String(index)} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
