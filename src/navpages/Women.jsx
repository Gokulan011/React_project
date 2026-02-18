import { useState } from "react";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import Womenbg from "../assets/Womens_banner.png"

function Women() {
   const womenProducts = Product.filter(p => p.category === "women");
  const [filtered, setFiltered] = useState(womenProducts);

  return (
    <>
    <img src={Womenbg} alt="" className="Womens-banner" />
    <PageSearch products={womenProducts} setFiltered={setFiltered} />

      <div className="grid">
        {filtered.map(p => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default Women;




  

