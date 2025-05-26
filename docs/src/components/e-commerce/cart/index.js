import React, { useEffect, useState } from "react";
import "./index.css"
import Header from "../header"; // Assuming you have a Header component
import { Link } from "react-router-dom";
const Cart = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Load cart items from localStorage when component mounts
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setItems(cartItems);
  }, []);
  
  const clearCart = () => {
    localStorage.removeItem('cartItems');
    setItems([]);
  };

  return (
    <div className="cart-page">
      <Header /> {/* Include header */}
      
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>

        {items.length === 0 ? (
          <div>
            <p>No items in the cart</p>
            <Link to="/offerzone">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.img} alt="cart-item" className="cart-image" />
                  <div>
                    <h3>{item.product}</h3>
                    <p>₹{item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-actions">
              <button onClick={clearCart}>Clear Cart</button>
              <button>Proceed to Checkout</button>
              <Link to="/offerzone">Continue Shopping</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;