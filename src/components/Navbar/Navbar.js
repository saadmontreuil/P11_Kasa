import React from 'react'
import { useState, useEffect } from 'react'

import { useLocation, NavLink } from 'react-router-dom'
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
        <NavLink to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>

        <ul className={styles.links}>
          <li className={styles.navItem}>
            <NavLink to="/" className={`${styles.navLink} ${active === 'home' ? styles.active : ''}`}>
              Accueil
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about" className={`${styles.navLink} ${active === 'about' ? styles.active : ''}`}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
