import React from 'react'
import Error404 from '../components/Error404/Error404'
import { useEffect } from 'react'

export default function Error() {

  useEffect(() => {
    document.title = " Kasa | 404";  
  }, []);

  return (
    <Error404/>
  )
}
