import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import { Navbar } from '../Navbar/Navbar'
import './Card.css'

export const Card = () => {
  return (
    <div className='card-div'>
        <img src="/proyect.png" alt="" />
        <Navbar>
            <ItemNavbar>Titulo</ItemNavbar>
            <ItemNavbar>Descripcion</ItemNavbar>
            <ItemNavbar>Ir al proyecto</ItemNavbar>
        </Navbar>
        
    </div>
  )
}
