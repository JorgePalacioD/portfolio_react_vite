import React from 'react'
import {Logo} from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import {ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { Photo } from '../../UI/Photo/Photo'
import { Name } from '../../UI/Name/Name'
import { Line } from '../../UI/Line/Line'
import { Footer } from '../Footer/Footer'

import './Header.css'

export const Header = () => {
  return (
    <header className='header-page'>
      <Photo />
      <Name />
      <Line />
      <Navbar className = "Navbar-header" >
        <ItemNavbar>Perfil</ItemNavbar>
        <ItemNavbar>Proyectos</ItemNavbar>
        <ItemNavbar>Referencias</ItemNavbar>
        <ItemNavbar>Experiencia</ItemNavbar>
      </Navbar>
      <Logo />
      <Footer />
    </header> 
  )
}