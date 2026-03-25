import { useState } from "react";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import Womenbg from "../assets/Womens_banner.png";
import Footer from '../components/Footer';
import { motion } from "framer-motion";

function Women() {
  const womenProducts = Product.filter(p => p.category === "women");
  const [filtered, setFiltered] = useState(womenProducts);

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
        <img src={Womenbg} alt="" className="Womens-banner" />
      </motion.div>

      {/* SEARCH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PageSearch products={womenProducts} setFiltered={setFiltered} />
      </motion.div>

      {/* GRID (same stagger effect) */}
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

export default Women;