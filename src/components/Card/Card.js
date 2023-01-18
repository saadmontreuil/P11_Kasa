import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({id,cover,title}) {
  return (

              <Link
                to={`/logement/${id}`}
                className={styles.apartLink}
                key={id}
              >
                <img
                  src={cover}
                  alt={title}
                  className={styles.apartImage}
                />
                <div>
                  <h4 className={styles.itemTitle}>{title}</h4>
                </div>
              </Link>
            
  )
}
