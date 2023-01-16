import React from 'react'
import styles from './Slider.module.css'
import imgleft from '../../images/left.svg'
import imgright from '../../images/right.svg'
import { useState } from 'react'


export default function Slider(props) {
    const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className={styles.slider}>
      <img src={props.pictures[current]} className={styles.slideImage} alt="slides" />
      <img className={styles.left} onClick={prev} src={imgleft} alt='left'/>
      <img className={styles.right} onClick={next} src={imgright} alt='right'/>
    </div>
  )
}
