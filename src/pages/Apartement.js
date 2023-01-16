import React from 'react'
import { useParams, Navigate } from "react-router-dom";
import Data from "../data/data.json";
import Slider from '../components/Slider/Slider';
import Collapse from '../components/Collapse/Collapse';


export default function Apartement() {
  const { id } = useParams();
  const apart = Data.find((item) => item.id === id);
  
  const equipment = apart.equipments.map((item) => (
    <div key={item}>{item}</div>
  ))

  console.log(apart.equipments);
  

  if (!apart) return <Navigate to="/ERROR" />;
  return (
    <>
    <Slider pictures={apart.pictures} />

    <Collapse title="Description" content={apart.description} />
    <Collapse title="Equipements" content={equipment} />
    </>
  )
}
