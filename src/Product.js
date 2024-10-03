import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo
            ducimus quasi ratione omnis laudantium earum molestiae maxime natus,
            nemo deleniti nulla asperiores architecto similique est? Est non
            numquam ea!
          </p>
          <p className="product-price">
            <small>$</small>
            <strong>30</strong>
          </p>
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
