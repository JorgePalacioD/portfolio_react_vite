import React from 'react'
import './Navbar.css'

export const Navbar = ({children}) => {
  return (
    <nav>
        <ul>
            {children}
        </ul>
    </nav>)}





// {
//   return (
//     <nav className='navbar'>
//       <ul>
//         <ItemNavbar content='Perfil' style='c1ff95' />
        
//         <ItemNavbar content='Proyectos' style='c1ff95' />
//         <ItemNavbar content='Referencias' style='c1ff95' />
//         <ItemNavbar content='Experiencia' style='c1ff95' />
//       </ul>
//     </nav>
//   )
// }