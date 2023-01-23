import React from 'react'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import BannerImage from '../images/banner.png'
import { useEffect } from 'react'
import Data from '../data/data.json'
import styles from '../components/Card/Card.module.css'
export default function Home() {

  useEffect(() => {
    document.title = " Kasa | Accueil";
  }, []);

  return (
    <>
      <Banner img={BannerImage} title='Chez vous, partout et ailleurs' />  

      <div className={styles.cardContainer}>
        <ul className={styles.cardList}>
          <li className={styles.cardItem}>
            {Data.map((item) => {
              return (
                <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
              );
            })}
          </li>
        </ul>
      </div>
    </>
  )
}
