import React from 'react'
import styles from './Banner.module.css'


export default function Banner(props) {
  return (
    <div className={styles.bannerContainer}>
        <h1 className={styles.bannerTitle}>{props.title}</h1>
        <img
          src={props.img} className={styles.bannerImage} alt="home-background" />
    </div>
  )
}
