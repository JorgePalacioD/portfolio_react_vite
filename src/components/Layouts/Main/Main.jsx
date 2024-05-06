import React from 'react'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import {ItemNavbar} from '../../UI/ItemNavbar/ItemNavbar'
import {Card} from '../../UI/Card/Card'
import { Experience } from '../../UI/Experience/Experience'

import './Main.css'


export const Main = () => {
  return (
    <main>
        <div className='main-container'>
            <section>
              <div>
                <Logo/>
                <h3>PERFIL</h3>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus ut quas delectus odio sequi eligendi placeat. Cupiditate earum iste similique rerum consectetur eos repudiandae! Officia nemo accusantium magnam. Ad, facere esse cumque maiores repellat ipsa obcaecati nostrum dicta ratione ut tempora nobis voluptates deleniti laborum ipsum reiciendis quam maxime nesciunt. At voluptatum eum eligendi delectus amet deserunt eaque laborum fugit velit facilis, corrupti illum cum ut? Laboriosam, corporis quaerat.
              </p>
            </section>
            <section>
              <div>
                <Logo/>
                <h3>PROYECTOS</h3>
              </div>
              <hr />
            </section>
            <section className='card-proyect'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </section>
            <section>
            <div>
                <Logo/>
                <h3>REFERENCIAS</h3>
              </div>
              <hr />
            </section>
            <section  className='card-references'>
              <div className='references-container'>
                <Navbar>
                  <ItemNavbar>Nombre</ItemNavbar>
                  <ItemNavbar>Cargo</ItemNavbar>
                  <ItemNavbar>Telefono</ItemNavbar>
                  <ItemNavbar>Correo Electronico</ItemNavbar>  
                </Navbar>
              </div>
              <div className='references-container'>
                <Navbar>
                  <ItemNavbar>Nombre</ItemNavbar>
                  <ItemNavbar>Cargo</ItemNavbar>
                  <ItemNavbar>Telefono</ItemNavbar>
                  <ItemNavbar>Correo Electronico</ItemNavbar>  
                </Navbar>
              </div>
              <div className='references-container'>
                <Navbar>
                  <ItemNavbar>Nombre</ItemNavbar>
                  <ItemNavbar>Cargo</ItemNavbar>
                  <ItemNavbar>Telefono</ItemNavbar>
                  <ItemNavbar>Correo Electronico</ItemNavbar>  
                </Navbar>
              </div>
            </section>
            <section>
            <div>
                <Logo/>
                <h3>EXPERIENCIA</h3>
              </div>
              <hr />
            </section>
            <section className='experience-card'>
              <Experience imgurl='/react.png'/>
              <Experience imgurl='/node.png'/>
              <Experience imgurl='/mongo.png'/>
              <Experience imgurl='/java.png'/>
            </section>
        </div>

    </main>
    
  )
}