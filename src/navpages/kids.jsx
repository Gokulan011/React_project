import { useState } from "react";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import PageSearch from "../components/PageSearch";

export default function Kids() {

  const kidsProducts = Product.filter(p => p.category === "kids");
  const [filtered, setFiltered] = useState(kidsProducts);

  return (
    <div className="page">

      <img src="src\assets\Kids_bg.png" className="Kids-banner" />

      <PageSearch products={kidsProducts} setFiltered={setFiltered} />

      <div className="grid">
        {filtered.map(p => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}
