import React from 'react'
import { motion } from "framer-motion";
import womenlinkpic from '../assets/image/women_linl_pic.avif'
import menlinkpic from '../assets/image/men_link_pic.avif'
import kidslinkpic from '../assets/image/kids.avif'
import dressbg from '../assets/image/dress_bg.avif'
import lookbookcuple from '../assets/image/look_book_cuplepic.avif'
import lookbookgirl from '../assets/image/look-book-girlpic3.avif'
import lookbookkids from '../assets/image/look_book_kidspic.avif'
import { useNavigate } from 'react-router-dom'
import ContactUs from './ContactUs'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <>
      {/* HERO */}
      <motion.div
        className='offer-img-div'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={dressbg} className='dress-bg' />
        <p className='offer-desc'>Don't Miss Out!</p>
        <p className='offer-desc2'>Limited Time Offer</p>
        <pre className='offer-desc3'>Hurry! Shop now to enjoy exclusive discounts on selected items.</pre>
        <button className='shopnow-btn' onClick={() => navigate("/allproducts")}>
          Shop Now <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </motion.div>

      {/* MEN */}
      <motion.div
        className='men-bg-clr'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className='men-link-div'>
          <img src={menlinkpic} className='men-link-pic' />
          <p className='men-home-desc'>ELEGANT & SLICK</p>
          <pre className='men-home-desc2'>GET READY FOR SUMMER</pre>
          <button className='men-page-btn' onClick={() => navigate("/men")}>
            Shop men <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </motion.div>

      {/* WOMEN */}
      <motion.div
        className='women-bg-clr'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className='women-link-dev'>
          <img src={womenlinkpic} className='women-link-pic' />
          <p className='women-home-desc'>SULTRY & SMART</p>
          <pre className='women-home-desc2'>HOT SPRING LOOKS</pre>
          <button className='women-page-btn' onClick={() => navigate("/women")}>
            Shop women <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </motion.div>

      {/* KIDS */}
      <motion.div
        className='kids-bg-clr'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className='kids-link-div'>
          <img src={kidslinkpic} className='kids-link-pic' />
          <p className='kids-home-desc'>CUTE & COMFY</p>
          <pre className='kids-home-desc2'>ALL DAY PLAY</pre>
          <button className='kids-page-btn' onClick={() => navigate("/kids")}>
            Shop Kids <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </motion.div>

      {/* TITLE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className='gk-h1'>#GK AETHER</h1>
      </motion.div>

      {/* LOOKBOOK */}
      <motion.div
        className='look-book-bg'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={lookbookcuple} className='look-book-pic1' />
        <img src={lookbookgirl} className='look-book-pic2' />
        <img src={lookbookkids} className='look-book-pic3' />
      </motion.div>

      {/* CONTACT */}
      <motion.div
        className='contact-pg'
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ContactUs />
      </motion.div>

      <Footer />
    </>
  )
}