import React from "react";
import "./Product.css";
const Product = ({ title, price, rating, imgSource, productName }) => {
  return (
    <>
      <div className="product">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <>⭐</>;
              })}
          </div>
        </div>
        <img src={imgSource} alt={productName} />
        <button>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;
