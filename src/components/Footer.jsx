import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function () {
     const navigate = useNavigate(); 
  return (
    <>
         <div className='footer'>
            <FontAwesomeIcon icon={faCrown} className="footer-logo" /> <br />
            <button className='footer-brand-name' onClick={() => navigate("/")} > GK AETHER</button>
            <h1 className='footer-caption'>Stay Connected with Us</h1>
            <ul className='footer-menulist'>
              <li > <Link className='footer-menu'> Privacy Policy</Link></li>
              <li ><Link className='footer-menu'>Accessibility Statement</Link></li>
              <li><Link className='footer-menu'>Shipping Policy</Link></li>
              <li ><Link className='footer-menu'>Terms & Conditions</Link></li>
              <li ><Link className='footer-menu'>Refund Policy</Link></li>
            </ul>
            <form action="" className='footer-form'>
              <label htmlFor="" className='footer-email'>Email *</label> <br />
              <input type="text" className='footer-input' /> <br />
              <input type="checkbox" className='footer-checkbox' required /><p className='footer-p'>Yes, subscribe me to your newsletter.*</p> <br />
              <button className='footer-submit'>Submit</button>
            </form>
            <ul className='icons-list'>
              <li> <Link> <FontAwesomeIcon icon={faInstagram} className='footer-icons' /></Link></li>
              <li> <Link> <FontAwesomeIcon icon={faFacebookF} className='footer-icons'/></Link></li>
              <li> <Link> <FontAwesomeIcon icon={faYoutube} className='footer-icons' /></Link> </li>
              <li> <Link> <FontAwesomeIcon icon={faXTwitter} className='footer-icons'/></Link></li>
            </ul>
            <div className='footer-mblno'>
            <p className='footer-mbl'>123-456-7890</p>
            <p className='footer-em'>Gkaether@mysite.com</p>
            </div>
     </div>
    </>
  )
}
