import React from 'react'
import styles from './Banner.module.css'
import BannerImage from '../../images/banner.png'


export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
        <h1 className={styles.bannerTitle}>Chez vous, partout et ailleurs</h1>
        <img
          src={BannerImage} className={styles.bannerImage} alt="home-background" />
    </div>
  )
}
