import React from 'react'
import womenlinkpic from '../assets/image/women_linl_pic.avif'
import menlinkpic from '../assets/image/men_link_pic.avif'
import kidslinkpic from '../assets/image/kids.avif'
import dressbg from '../assets/image/dress_bg.avif'
import lookbookcuple from '../assets/image/look_book_cuplepic.avif'
import lookbookgirl from '../assets/image/look-book-girlpic3.avif'
import lookbookkids from '../assets/image/look_book_kidspic.avif'
import {  useNavigate } from 'react-router-dom'
import ContactUs from './ContactUs'



export default function Home() {
  const navigate = useNavigate(); 
  return (
    <>
    <div className='offer-img-div'>
      <img src={dressbg} className='dress-bg' />
      <p className='offer-desc'>Don't Miss Out!</p>
      <p className='offer-desc2'>Limited Time Offer</p>
      <pre className='offer-desc3'>Hurry! Shop now to enjoy exclusive discounts on selected items.</pre>
      <button className='shopnow-btn' onClick={() => navigate("/allproducts")}>Shop Now</button>
    </div>

    <div className='men-bg-clr'>
    <div className='men-link-div'>
      <img src={menlinkpic} className='men-link-pic' />
      <p className='men-home-desc'>ELEGANT & SLICK</p>
      <pre  className='men-home-desc2' >GET READY FOR SUMMER</pre>
         <button className='men-page-btn' onClick={() => navigate("/men")} >Shop men</button>
    </div></div>

    <div className='women-bg-clr'>
    <div className='women-link-dev'>
      <img src={womenlinkpic} className='women-link-pic'/>
      <p className='women-home-desc'>SULTRY & SMART</p>
      <pre className='women-home-desc2' >HOT SPRING LOOKS</pre>
      <button className='women-page-btn' onClick={() => navigate("/women")} >Shop women</button>
    </div></div>

    <div className='kids-bg-clr'>
    <div className='kids-link-div'>
      <img src={kidslinkpic} className='kids-link-pic' />
      <p className='kids-home-desc'>CUTE & COMFY</p>
      <pre className='kids-home-desc2'>ALL DAY PLAY</pre>
      <button className='kids-page-btn' onClick={() => navigate("/kids")} >Shop Kids</button>
    </div></div>
    <div><h1 className='gk-h1'>#GK AETHER</h1></div>
    <div className='look-book-bg'>
      <img src={lookbookcuple} className='look-book-pic1'/>
      <img src={lookbookgirl} className='look-book-pic2'/>
      <img src={lookbookkids}  className='look-book-pic3'/>
    </div>
    <div className='contact-pg'>
     <ContactUs/>
    </div> 
    </>
  )
}
