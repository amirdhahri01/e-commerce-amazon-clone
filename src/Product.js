import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, price, rating, imgSource, productName }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: imgSource,
        price: price,
        rating: rating,
      },
    });
  };
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
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;
