import React from 'react'
import product from "../data/Product";
import Gk_bg_blue_blr from "../assets/Gk_bg_brown_blr.png"
import Productcard from '../components/Productcard';
import Footer from '../components/Footer'
import { motion } from "framer-motion";

export default function Allproducts() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      {/* BACKGROUND + TITLE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={Gk_bg_blue_blr} alt="" className="home-hd-bg"/>
        <h1 className="Name_banner">GK AETHER</h1>
      </motion.div>

      {/* PRODUCT GRID */}
      <motion.div
        className="page"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {product.map(p => (
            <motion.div key={p.id} variants={fadeUp}>
              <Productcard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer/>
    </>
  )
}