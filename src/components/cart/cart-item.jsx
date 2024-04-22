import React, { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage, briefdescription, color } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(AppleStoreContext);

  return (
    <div className="cartItem" id="productItem">

      <img src={productImage} className="product-img" />
      <div className="description" id="description">
        <p className="product-name">{productName}</p>
        <p className="product-color">{color}</p>
        <p className="brief-description"> {briefdescription}</p>
        <p className="product-price"> Price: ${price} x {cartItems[id]}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} id="subtraction-icon"> - </button>
          <input id="inputValue"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)} id="plus-icon"> + </button>        
        </div>
      </div>
    </div>
  );
};
