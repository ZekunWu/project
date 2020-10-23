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
    console.log(window.innerWidth)
    document.getElementById('banner').addEventListener("mousemove", (e) => {
      let blurIndex = Math.floor(e.offsetX / window.innerWidth * 6)
      this.state.imgArray.forEach((item, index) => {
        document.getElementById(`banner${index}`).style.filter = index === blurIndex? 'blur(0)' : 'blur(3px)'
      })
    })
    document.getElementById('banner').addEventListener("mouseout", () => {
      this.state.imgArray.forEach((item, index) => {
        document.getElementById(`banner${index}`).style.filter = 'blur(3px)'
      })
    })
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.banner} id="banner">
          {this.state.imgArray.map((value, index) => 
            <div className={styles.bannerItem} key={index} id={`banner${index}`}>
              <img style={{height: '250px', width: '100%'}} src={imgPath(`bg${index + 1}.png`)} alt={String(index)} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
