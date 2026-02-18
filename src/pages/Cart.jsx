import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();

  // GET DATA FROM CONTEXT
  const { cart, increaseQty, decreaseQty, removeFromCart , clearCart } = useContext(CartContext);

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-layout">

      <div className="cart-items">

        {cart.length === 0 && <h2>Your cart is empty</h2>}

        {cart.map(item => (
          <div key={item.id} className="cart-card">

            <img src={item.img} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="cart-price">₹{item.price}</p>
              <p className="cart-desc">{item.desc}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>

          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="cart-summary">
        <h3>Subtotal ({cart.length} items)</h3>
        <h2>₹{totalPrice}</h2>
       <button
  className="checkout"
  onClick={() => {
    clearCart();
    navigate("/");
  }}
>
  Proceed to Buy
</button>

      </div>

    </div>
  );
};

export default Cart;
