import MensBanner from "../assets/Men's Fashion Banner.png";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import { useState } from "react";

function Men() {
     const menProducts = Product.filter(p => p.category === "men");
  const [filtered, setFiltered] = useState(menProducts);
  return (
    <>
    <div className="page">
      <img src={MensBanner}  className="mens-banner" />
    </div>
     <PageSearch products={menProducts} setFiltered={setFiltered} />
      <div className="grid">
        {filtered.map(p => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>
     </>
  );
}

export default Men;