import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function Productcard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="card">
        <img src={product.img} alt={product.name} />
        <h3 className="Pro-name">{product.name}</h3>

        <StarRating rating={product.rating} />

        <p className="price">₹{product.price}</p>
      </div>
    </Link>
  );
}
