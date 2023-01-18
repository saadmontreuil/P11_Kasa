import React from 'react'
import styles from './Banner.module.css'


export default function Banner({title, img}) {
  return (
    <div className={styles.bannerContainer}>
        <h1 className={styles.bannerTitle}>{title}</h1>
        <img
          src={img} className={styles.bannerImage} alt="home-background" />
    </div>
  )
}
