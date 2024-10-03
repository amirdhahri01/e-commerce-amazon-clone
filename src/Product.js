import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product-info">
          <p>Title</p>
          <p className="product-price">$30</p>
          <div className="product-rating">⭐⭐⭐</div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/716-ufSNJ5L._AC_UY1000_.jpg"
          alt="Backpack"
        />
        <button>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;
