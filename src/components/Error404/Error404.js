import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error404.module.css'

export default function Error404() {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.letter404}>404</span>
      <p className={styles.message404}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.backHome}>
        <div className={styles.returnButton}>
          Retournez sur la page d’accueil
        </div>
      </Link>
    </div>
  )
}
