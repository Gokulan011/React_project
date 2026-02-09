import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-bg'>
        <ul className='navbar'>
            <li><Link to="/home" className='nav-li'>Home</Link></li>
            <li><Link to="/about"  className='nav-li'> About</Link></li>
            <li> <Link to="/services"  className='nav-li'>Services</Link> </li>
            <li><Link to="/login"  className='nav-li'>Login</Link> </li>
        </ul>
    </div>
  )
}
