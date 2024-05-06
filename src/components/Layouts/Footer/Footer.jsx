import React from 'react'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <Navbar>
        <ItemNavbar><FaLinkedinIn /></ItemNavbar>
        <ItemNavbar><FaFacebookF /></ItemNavbar>
        <ItemNavbar><FaInstagram /></ItemNavbar>
        <ItemNavbar><FaTwitter /></ItemNavbar>
        <ItemNavbar><FaWhatsapp /></ItemNavbar>
      </Navbar>
    </footer>
      
  )
}