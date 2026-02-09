import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
       <nav>
           <ul className='navbar'>
            <li><Link to="/" style={{textDecoration:"none",margin:"0px 0px 0px 100px " ,color:"black"}}>Home</Link></li>
            <li><Link to="/about"  style={{textDecoration:"none" ,margin:"0px 0px 0px 30px ",color:"black"}}> About</Link></li>
            <li> <Link to="/services"  style={{textDecoration:"none" ,margin:"0px 0px 0px 30px ",color:"black"}}>Services</Link> </li>
            <li><Link to="/login"  style={{textDecoration:"none" ,margin:"0px 0px 0px 30px ",color:"black"}}>Login</Link> </li>
        </ul>    
    </nav>
    <h1>This is About Page </h1>
    </div>
  )
}
