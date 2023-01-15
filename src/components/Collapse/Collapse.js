import React from 'react'
import styles from './Collapse.module.css'
import { useState } from 'react'
import AboutData from '../../data/about.json'
import imgup from '../../images/up.svg'
import imgdown from '../../images/down.svg'

const Up = <img src={imgup} alt='up'/>
const Down = <img src={imgdown} alt='down' />

export default function Collapse() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
  return (
    <div className={styles.collapseAboutContainer}>
        {AboutData.map((data)=>{
            return (
                <div className={styles.collapseApart}  key={data.id}>
                <div className={styles.item}>
                    <div className={styles.collapseTitle} onClick={toggle}>
                        <h2>{data.title}</h2>
                        <span>{open ? Up : Down}</span>
                    </div>
                    <div className={open ? styles.collapseContentShow : styles.collapseContent}>
                        {data.content}
                    </div>
                </div>
            </div>
            )

        })}

    </div>
  )
}
