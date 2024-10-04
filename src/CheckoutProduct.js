import React from "react";
import "./CheckoutProduct.css";
const CheckoutProduct = () => {
  return (
    <>
      <div className="checkout-product">
        <img
          src="https://m.media-amazon.com/images/I/716-ufSNJ5L._AC_SX425_.jpg"
          alt="Backpack"
          className="checkout-product-image"
        />
        <div className="product-info">
          <p className="checkout-product-title">
            abshoo Classical Basic Travel Backpack For School Water Resistant
            Bookbag
          </p>
          <p className="price">
            <small>$</small>
            <strong>30</strong>
          </p>
          <div className="checkout-product-rating">⭐⭐⭐⭐</div>
          <button>Remove from basket</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
