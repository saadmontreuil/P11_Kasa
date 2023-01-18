import React from 'react'
import styles from './Collapse.module.css'
import { useState } from 'react'
import imgup from '../../images/up.svg'
import imgdown from '../../images/down.svg'

const Up = <img src={imgup} alt='up'/>
const Down = <img src={imgdown} alt='down' />

export default function Collapse({title, content}) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
  return (
            <div className={styles.collapseApart} >
                <div className={styles.item}>
                    <div className={styles.collapseTitle} onClick={toggle}>
                        <h2>{title}</h2>
                        <span>{open ? Up : Down}</span>
                    </div>
                    <div className={open ? styles.collapseContentShow : styles.collapseContent}>
                        {content}
                    </div>
                </div>
            </div>
  )
}