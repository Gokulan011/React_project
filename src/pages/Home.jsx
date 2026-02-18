import ProductCard from "../components/Productcard";
import product from "../data/Product";
import Gk_bg_blue_blr from "../assets/Gk_bg_brown_blr.png"

function Home() {
  return (
 <>
    <img src={Gk_bg_blue_blr} alt=""  className="home-hd-bg"/>
    <h1 className="Name_banner" >GK AETHER</h1>
    <div className="page">
      <div className="grid">
        
        {product.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div></>
  );
}

export default Home;
