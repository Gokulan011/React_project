import { useParams } from "react-router-dom";
import Product from "../data/Product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {

  const { id } = useParams();
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  const product = Product.find(p => p.id === Number(id));
  if (!product) return <h2>Product Not Found</h2>;

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-details">

      {/* IMAGE */}
      <div className="image-section">
        <img src={product.img} alt={product.name} />
      </div>

      {/* INFO */}
      <div className="info-section">
        <h1 className="title">{product.name}</h1>
        <p className="rating">⭐⭐⭐⭐☆</p>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.desc}</p>
      </div>

      {/* BUY BOX */}
      <div className="buy-section">

        <h2 className="buy-price">₹{product.price}</h2>
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

    </div>
  );
}
