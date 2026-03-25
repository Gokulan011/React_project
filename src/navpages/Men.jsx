import MensBanner from "../assets/Men's Fashion Banner.png";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import { useState } from "react";
import Footer from '../components/Footer'
import { motion } from "framer-motion";

function Men() {
  const menProducts = Product.filter(p => p.category === "men");
  const [filtered, setFiltered] = useState(menProducts);

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
        <img src={MensBanner} className="mens-banner" />
      </motion.div>

      {/* SEARCH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PageSearch products={menProducts} setFiltered={setFiltered} />
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

export default Men;