import { useState } from "react";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import Kidsbanner from "../assets/Kids_banner.png";
import Footer from '../components/Footer';
import { motion } from "framer-motion";

export default function Kids() {

  const kidsProducts = Product.filter(p => p.category === "kids");
  const [filtered, setFiltered] = useState(kidsProducts);

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
      {/* BANNER */}
      <motion.div
        className="page"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={Kidsbanner} className="Kids-banner" />
      </motion.div>

      {/* SEARCH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PageSearch products={kidsProducts} setFiltered={setFiltered} />
      </motion.div>

      {/* PRODUCT GRID */}
      <motion.div
        className="grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {filtered.map(p => (
          <motion.div key={p.id} variants={fadeUp}>
            <Productcard product={p} />
          </motion.div>
        ))}
      </motion.div>

      <Footer/>
    </>
  );
}