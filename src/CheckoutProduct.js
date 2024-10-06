import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  imgSource,
  productName,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
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
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
