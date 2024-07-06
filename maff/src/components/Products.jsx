// Products.js
import React from "react";
import "./products.css";
import Card from "./cmmons/Card"; // Adjust the import path as necessary

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="nav">
        
        <ul>
        
          <li>Best sellings</li>
           <span>|</span>
          <li>Promos</li>
          <span>|</span>

          <li>Up Coming</li>
        </ul>
      </div>
      <div className="cards-container">
        <Card
           coverImage="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
          titleImage="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
          characterImage="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        />
        <Card
          link="https://www.mythrillfiction.com/force-mage"
          coverImage="src/assets/fc.jpg"
          titleImage="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
          characterImage="src/assets/leo.png"
        />
        <Card
          link="https://www.mythrillfiction.com/the-dark-rider"
          coverImage="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
          titleImage="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
          characterImage="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        />
        <Card
          link="https://www.mythrillfiction.com/force-mage"
          coverImage="src/assets/fc.jpg"
          titleImage="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
          characterImage="src/assets/leo.png"
        />
        
      </div>
      <div className="btn">
      <button>See More</button>
      </div>
    </>
  );
};

export default Products;
