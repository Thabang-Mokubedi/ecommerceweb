import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppleStoreContext } from "../context/AppleStoreContext";
import AddtocartButton from "../../assets/icons/Addtocart-Button.png";

export const Product = (props) => {
  const { id, productName, color, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(AppleStoreContext);

  const cartItemCount = cartItems[id];

  const addedtoCart = () => {
    alert('Item has been added to your cart!');
  }

  return (

    <div className="product">
      <Link to="/item1">
        <img src={productImage} />
      </Link>


      <div className="description">
        <div className="productName">
          <span>{productName}</span>
        </div>
        <div className="productcolor">
          <span>{color}</span>
        </div>
      </div>

      <div className="productSection3">

        <div className="productPrice">
          <span>$ {price}</span>
        </div>

        <div className="addtocart-Button">
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            <img src={AddtocartButton} id="iconcart" onClick={addedtoCart} /> {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>

      </div>

    </div>
  );
};
