import React from "react";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://www.x-cart.com/img/16591/ecommerce-p800.webp"
          alt="E-commerce"
          className="home-image"
        />
        <div className="home-row">
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
};
export default Home;
