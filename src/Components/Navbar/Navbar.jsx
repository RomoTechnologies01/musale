import React from 'react';
import './Navbar.css';
import logo from '../src../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Career</li>
        <li><button className='btn'>Contact Us</button></li>



      </ul>



    </nav>
  )
}

export default Navbar