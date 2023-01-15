import React from 'react'
import styles from './Collapse.module.css'
import { useState } from 'react'
import AboutData from '../../data/about.json'
import imgup from '../../images/up.svg'
import imgdown from '../../images/down.svg'

const Up = <img src={imgup} alt='up'/>
const Down = <img src={imgdown} alt='down' />

export default function Collapse() {
    const [open, setOpen] = useState(Array(AboutData.length).fill(false));
    const toggle = (index) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
      };
  return (
    <div className={styles.collapseAboutContainer}>
        {AboutData.map((data, index)=>{
            return (
                <div className={styles.collapseApart}  key={data.id}>
                <div className={styles.item}>
                    <div className={styles.collapseTitle} onClick={()=>toggle(index)}>
                        <h2>{data.title}</h2>
                        <span>{open[index] ? Up : Down}</span>
                    </div>
                    <div className={open[index] ? styles.collapseContentShow : styles.collapseContent}>
                        {data.content}
                    </div>
                </div>
            </div>
            )

        })}

    </div>
  )
}
