import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout-left">
          <img
            src="https://img.etimg.com/photo/msid-94686343,imgsize-1493784/Primeoffers!.jpg"
            alt="ads"
            className="checkout-ad"
          />
          <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {basket.map(
              ({ id, title, price, rating, imgSource, productName }) => {
                return (
                  <CheckoutProduct
                    id={id}
                    title={title}
                    price={price}
                    rating={rating}
                    imgSource={imgSource}
                    productName={productName}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
