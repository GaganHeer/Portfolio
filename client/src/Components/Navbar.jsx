import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/General/logo.png'
import resume from '../Documents/GaganHeer_Resume.pdf';
import '../Stylesheets/Navbar.css'

const NavBar = () => {
 
  const openResume = ((event) => {
    event.preventDefault();
    window.open(resume);
  })

  return (
    <nav className='navContainer'>
      <img className='logo' src={logo} alt='logo'/>
      <ul className='navPages'>
        <NavLink className='navLinks' to ='/about'><li>ABOUT</li></NavLink>
        <NavLink className='navLinks' to='/projects'><li>PROJECTS</li></NavLink>
        <NavLink className='navLinks' to='/contact'><li>CONTACT ME</li></NavLink>
        <NavLink className='navLinks' to='#' onClick={openResume}><li>RESUME</li></NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;