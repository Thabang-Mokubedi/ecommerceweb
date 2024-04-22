import React from "react";
import { AppleStoreItems } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {AppleStoreItems.map((product) => (
          <Product data={product} />
        ))}
      </div>  
    </div>

  );
};
