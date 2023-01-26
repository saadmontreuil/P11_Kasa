import React from 'react'
import Banner from '../components/Banner/Banner'
import BannerImage2 from '../images/banner2.png'
import Collapse from '../components/Collapse/Collapse'
import AboutData from '../data/about.json'
import { useEffect } from 'react'


export default function About() {

  useEffect(() => {
    document.title = " Kasa | A propos";  
  }, []);

  
  return (
    <>
 
    <Banner img={BannerImage2} />
    {AboutData.map((data , index) => {
      return (
        <Collapse key={index} title={data.title} content={data.content}  />
      );
    
  })}
    </>
  )
}
