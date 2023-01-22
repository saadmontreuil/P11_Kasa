import React from 'react'
import { useState, useEffect } from 'react'

import { useLocation, Link } from 'react-router-dom'
import logo from '../../images/Logo.svg'
import styles from './Navbar.module.css'

export default function Navbar() {

  const [active, setActive] = useState("");
  const location = useLocation();
  
  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/') {
      setActive('home');
    } else if (pathname === '/about') {
      setActive('about');
    }else{
      setActive('');
    }
  }, [location]);

  return (
    <nav>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <ul className={styles.links}>
          <li className={styles.navItem}>
            <Link to="/" className={`${styles.navLink} ${active === 'home' ? styles.active : ''}`}>
              Accueil
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={`${styles.navLink} ${active === 'about' ? styles.active : ''}`}>
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
