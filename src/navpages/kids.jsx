import { useState } from "react";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";
import kids_bg from "../assets/kids_bg.png"

export default function Kids() {

  const kidsProducts = Product.filter(p => p.category === "kids");
  const [filtered, setFiltered] = useState(kidsProducts);

  return (
    <div className="page">

      <img src={kids_bg} className="Kids-banner" />

      <PageSearch products={kidsProducts} setFiltered={setFiltered} />

      <div className="grid">
        {filtered.map(p => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}
