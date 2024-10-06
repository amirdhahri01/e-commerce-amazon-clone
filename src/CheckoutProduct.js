import React from "react";
import "./CheckoutProduct.css";
const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  imgSource,
  productName,
}) => {
  return (
    <>
      <div className="checkout-product" id={id}>
        <img
          src={imgSource}
          alt={productName}
          className="checkout-product-image"
        />
        <div className="product-info">
          <p className="checkout-product-title">{title}</p>
          <p className="price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout-product-rating">
            {Array(rating)
              .fill()
              .map((item) => {
                return <>⭐</>;
              })}
          </div>
          <button>Remove from basket</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
