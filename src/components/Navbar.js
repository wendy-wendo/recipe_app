import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><h1>Chef's Compass</h1></Link>
      <ul>
        <Link to="about"><li>ABOUT</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
