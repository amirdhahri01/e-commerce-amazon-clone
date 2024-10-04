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
          <Product
            id="1234"
            title="abshoo Classical Basic Travel Backpack For School Water Resistant Bookbag"
            price={30}
            imgSource="https://m.media-amazon.com/images/I/716-ufSNJ5L._AC_SX425_.jpg"
            productName="Backpack "
            rating={5}
          />
          <Product
            id="1235"
            title="Skytech Gaming Nebula Gaming PC Desktop – Intel Core i5 13400F 2.5 GHz, NVIDIA RTX 4060, 1TB NVME SSD, 16GB DDR4 RAM 3200, 600W Gold PSU, 11AC Wi-Fi, Windows 11 Home 64-bit,Black"
            price={849}
            imgSource="https://m.media-amazon.com/images/I/61INtCQzv2L._AC_SX425_.jpg"
            productName="Skytech Gaming Nebula "
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id="1236"
            title="LG 34GS95QE 34-inch Ultragear OLED Curved Gaming Monitor WQHD 800R 240Hz 0.03ms DisplayHDR True Black 400 AMD FreeSync Premium Pro NVIDIA G-Sync HDMI 2.1 DisplayPort Tilt/Height/Swivel Stand Black"
            price={796}
            imgSource="https://m.media-amazon.com/images/I/71gFhHZm1YL._AC_SX425_.jpg"
            productName="LG 34GS95QE 34-inch Ultragear OLED Curved Gaming Monitor "
            rating={3}
          />
          <Product
            id="1237"
            title="Frigidaire EFMIS179 Gaming Light Up Mini Beverage Refrigerator, Stealth"
            price={41}
            imgSource="https://m.media-amazon.com/images/I/71yl7YJUTKL._AC_SX679_.jpg"
            productName="Frigidaire EFMIS179 Gaming "
            rating={4}
          />
          <Product
            id="1238"
            title="MSI Gaming GeForce RTX 3060 12GB 15 Gbps GDRR6 192-Bit HDMI/DP PCIe 4 Torx Twin Fan Ampere OC Graphics Card"
            price={285}
            imgSource="https://m.media-amazon.com/images/I/71tduSp8ooL._AC_SX569_.jpg"
            productName="RTX 3060 12GB 15 Gbps GDRR6 "
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="1239"
            title="Gaming Headset for PC, Ps4, Ps5, Xbox Headset with 7.1 Surround Sound, Gaming Headphones with Noise Cancelling Mic RGB Light Over Ear Headphones for Xbox Series X/S, Switch"
            price={19.99}
            imgSource="https://m.media-amazon.com/images/I/712OyBPPL0L._AC_SX425_.jpg"
            productName="Gaming Headset for PC, Ps4, Ps5, Xbox Headset with 7.1 Surround Sound "
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
