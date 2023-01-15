import React from 'react'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import BannerImage from '../images/banner.png'
export default function Home() {
  return (
    <>
       <Banner img={BannerImage} title='Chez vous, partout et ailleurs' />      
       <Card/>
    </>
  )
}
