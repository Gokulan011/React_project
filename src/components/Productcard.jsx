import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard({ product, small }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className={`card ${small ? "small-card" : ""}`}>
        <img src={product.img} alt={product.name} />
        <h3 className="Pro-name">{product.name}</h3>
        <div className="pro-star">
          <StarRating rating={product.rating} />
        </div>
        <p className="price">₹{product.price}</p>
      </div>
    </Link>
  );
}