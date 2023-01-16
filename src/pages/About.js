import React from 'react'
import Banner from '../components/Banner/Banner'
import BannerImage2 from '../images/banner2.png'
import Collapse from '../components/Collapse/Collapse'
import AboutData from '../data/about.json'

export default function About() {
  return (
    console.log(AboutData),
    <>
 
    <Banner img={BannerImage2} />
    {AboutData.map((data) => {
      return (
        <Collapse title={data.title} content={data.content}  />
      );
    
  })}
    </>
  )
}
