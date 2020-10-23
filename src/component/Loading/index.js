import React from 'react'
import LoadingImg from '../../../public/images/loading.png'
import Styles from './index.module.css'

function Loading () {
  return (
    <div className={Styles.loading}>
      <img className={Styles.loadingImg} src={LoadingImg} alt="loading"/>
      <div className={Styles.tips}>loading...</div>
    </div>
  )
}

export default Loading
