import React from 'react'
import { useParams, Navigate } from "react-router-dom";
import Data from "../data/data.json";
import Slider from '../components/Slider/Slider';

export default function Apartement() {
  const { id } = useParams();
  const apart = Data.find((item) => item.id === id);

  if (!apart) return <Navigate to="/ERROR" />;
  return (
    <Slider pictures={apart.pictures} />
  )
}
