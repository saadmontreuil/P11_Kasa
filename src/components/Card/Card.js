import React from 'react'
import { Link } from "react-router-dom";
import Data from "../../data/data.json";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cardList}>
        <li className={styles.cardItem}>
          {Data.map((item) => {
            return (
              <Link
                to={`/logement/${item.id}`}
                className={styles.apartLink}
                key={item.id}
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className={styles.apartImage}
                />
                <div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  )
}
