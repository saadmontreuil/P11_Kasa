import React from 'react'
import styles from './Slider.module.css'
import imgleft from '../../images/left.svg'
import imgright from '../../images/right.svg'
import { useState } from 'react'


export default function Slider({pictures}) {
    const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className={styles.slider}>
      <img src={pictures[current]} className={styles.slideImage} alt="slides" />
      {pictures.length > 1 ? (
        <>
          <img className={styles.left} onClick={prev} src={imgleft} alt='left'/>
          <img className={styles.right} onClick={next} src={imgright} alt='right'/>
          <ul className={styles.bullets}>
            {pictures.map((_, index) => (
              <li key={index} className={current === index ? styles.active : null} />
            ))}
          </ul>
          <div className={styles.slideNumber}>
            {current + 1}/{length}
          </div>
        </>
      ) : null}
    </div>
  )
}
