import React from 'react'
import logo from '../../images/wLOGO.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div>
            <img src={logo} alt="white Logo" className="K-letter" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}
