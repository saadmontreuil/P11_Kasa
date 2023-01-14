import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo.svg'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <ul>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Accueil
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
