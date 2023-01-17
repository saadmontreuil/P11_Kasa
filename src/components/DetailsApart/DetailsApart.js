import React from 'react'
import styles from './DetailsApart.module.css';
import RedStar from '../../images/redStar.svg'
import GreyStar from '../../images/greyStar.svg'



export default function DetailsApart(props) {

    const stars = Array(5).fill(0);


  return (
    <div className={styles.apartContainer}>
      <div className={styles.apartDetails}>
        <h2 className={styles.apartTitle}>{props.apart.title}</h2>
        <span className={styles.apartLocation}>{props.apart.location}</span>
        <div className={styles.apartTags}>
          {props.apart.tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.apartRating}>
        <div className={styles.hostContainer}>
          <span className={styles.hostName}>{props.apart.host.name}</span>
          <img className={styles.hostProfil} alt="apartement" src={props.apart.host.picture} />
        </div>
        <div className={styles.hostRating}>
          <div className="stars">
            {stars.map((_, i) => (

            <img src={props.apart.rating > i ? RedStar : GreyStar} alt="star" />
            
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
