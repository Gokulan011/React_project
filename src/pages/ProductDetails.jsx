import { useParams } from "react-router-dom";
import Product from "../data/Product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import StarRating from "../components/StarRating";
import ProductCard from "../components/Productcard";

export default function ProductDetails() {
  const { id } = useParams();
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  // Step 1: Find clicked product
  const product = Product.find(p => p.id === Number(id));
  if (!product) return <h2>Product Not Found</h2>;

  // Step 2: Find related products (same category, exclude current product)
  const relatedProducts = Product
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // optional: limit to 4

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-details">

      {/* MAIN PRODUCT IMAGE */}
      <div className="image-section">
        <img src={product.img} alt={product.name} />
      </div>

      {/* MAIN PRODUCT INFO */}
      <div className="info-section">
        <h1 className="title">{product.name}</h1>
        <p className="rating"><StarRating rating={product.rating} /></p>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.desc}</p>
      </div>

      {/* BUY BOX */}
      <div className="buy-section">
        <p className="stock">In stock</p>

        {!cartItem ? (
          <button className="add-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        ) : (
          <div className="qty-box">
            <button onClick={() => decreaseQty(product.id)}>-</button>
            <span>{cartItem.qty}</span>
            <button onClick={() => increaseQty(product.id)}>+</button>
          </div>
        )}

        <button className="buy-now">Buy Now</button>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(item => (
              <ProductCard key={item.id} product={item} small />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}