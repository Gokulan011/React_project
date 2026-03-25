import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();


  // GET DATA FROM CONTEXT
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useContext(CartContext);

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
          onClick={async () => {
            if (cart.length === 0) {
              // Styled alert for empty cart with responsive width
              Swal.fire({
                title: "Cart is empty!",
                text: "Add items to your cart before proceeding.",
                icon: "warning",
                background: "#fff",
                color: "#1e1e1e",
                confirmButtonColor: "#f44336",
                confirmButtonText: "OK",
                width: window.innerWidth > 480 ? "40%" : "500px", // 80% width for mobile
                padding: "1.5rem",
              });
              return;
            }

            // Styled confirmation popup with responsive width
            const result = await Swal.fire({
              title: "Place your order?",
              text: "Do you want to proceed with your order?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Yes, place order",
              cancelButtonText: "Cancel",
              background: "#fff",
              color: "#1e1e1e",
              confirmButtonColor: "#4CAF50",
              cancelButtonColor: "#f44336",
              width: window.innerWidth > 480 ? "40%" : "500px", // responsive width
              padding: "1.5rem",
            });

            if (result.isConfirmed) {
              clearCart();
              navigate("/");

              // Styled success popup with responsive width
              Swal.fire({
                title: "Order Placed!",
                text: "Your order was successful 🎉",
                icon: "success",
                background: "#fff",
                color: "#1e1e1e",
                confirmButtonColor: "#4CAF50",
                confirmButtonText: "OK",
                width: window.innerWidth > 480 ? "40%" : "500px", // responsive width
                padding: "1.5rem",
              });
            }
          }}
        >
          Proceed to Buy
        </button>

      </div>

    </div>
  );
};

export default Cart;
