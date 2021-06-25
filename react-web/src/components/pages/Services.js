import React from 'react'
import '../../App.css'
import { useEffect } from 'react';


export default function Services(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return <h1 className = 'services'>SERVICES </h1>;
}