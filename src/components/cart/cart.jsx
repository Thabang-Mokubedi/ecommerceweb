import React, { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";
import { AppleStoreItems } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(AppleStoreContext);
  const totalAmount = getTotalCartAmount();
  

  return (
    <div className="cart">

      <div className="cart">
        {AppleStoreItems.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p id="totalp"> Bag Total: ${totalAmount} </p>

        
        </div>
      ) : (
<></>
      )}
    </div>
  );
};
