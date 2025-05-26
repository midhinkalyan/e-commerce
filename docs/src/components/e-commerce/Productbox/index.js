
import React, { Component } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

class ProductBox extends Component {
  state = {
    showmsg: false,
  };

  Cart_button = () => {
    const { img, price, description, product, addToCart } = this.props;
    const item = { img, price, description, product };
    
    // Call the addToCart function if it exists (this would be passed from parent)
    if (typeof addToCart === 'function') {
      addToCart(item);
    }
    
    // Store the item in localStorage for the cart page to access
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    this.setState({ showmsg: true });

    setTimeout(() => {
      this.setState({ showmsg: false });
      
    }, 2000);
  };

  render() {
    const { img, price, description, product } = this.props;
    const { showmsg } = this.state;

    return (
      <div className="product-box">
        <img className="product_image" src={img} alt="product" />
        <h2>{product}</h2>
        <h2>PRICE: ₹{price}</h2>
        <button onClick={this.Cart_button}>
          <img className="cart_image" src="./cart.png" alt="cart" />
        </button>
        <p>{description}</p>

        {showmsg && <p className="added-msg">Product is added to the cart</p>}
      </div>
    );
  }
}


export default ProductBox;
