import React from 'react';
import axios from 'axios';
import imgPath from '../../utils/imgPath';
import baseUrl from '../../utils/baseUrl';
import styles from './index.module.css';

class Home extends React.Component{
  constructor(props){
    super()
    this.state = {
    }
  }

  render() {
    console.log(baseUrl)
    return (
      <div className={styles.homePage}>
        <div className={styles.header}>
          <div className={styles.avatarArea}>
            <img className={styles.avatar} src={imgPath('avatar.jpg')} alt='不知火' />
            <div className={styles.avatarText}>虚宿一Kino天下第一！</div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navItem}>
              <a href={`${baseUrl}/login`} className={styles.navLink}></a>
              <img className={styles.navIcon} src={imgPath('home.png')} alt='' />
              <div className={styles.navText}>首页</div>
            </div>
            <div className={styles.navItem}>
              <img className={styles.navIcon} src={imgPath('test.png')} alt='' />
              <div className={styles.navText}>测试</div>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <div className={styles.backgroundText}>
            <span style={{fontSize: '3em'}}>虚宿一Kino</span><br/>世上最温柔的女孩子呢！
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
