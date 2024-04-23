import "./cartsummary.css";
import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";

export const CartSummary = () => {
    const { getTotalCartAmount } = useContext(AppleStoreContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div>
            <div className="cartsummary-div">
                <div className="cartsummary-title">Order Summary</div>

                <div className="sub-div">
                    <div className="cart-subheading">Items:</div>
                    <div className="price-cart">$ {totalAmount} </div>
                </div>

                <div className="sub-div">
                    <div className="cart-subheading">Shipping:</div>
                    <div className="price-cart">$ 85.00 </div>
                </div>

                <div className="sub-div">
                    <div className="cart-subheading">Estimated GST:</div>
                    <div className="price-cart">$ 20.00 </div>
                </div>

                <div className="sub-div">
                    <div className="cart-subheading">Gift Card:</div>
                    <div className="price-cart">$ 53.21</div>
                </div>

                <div className="cartsummary-hr" />
                <div className="subdiv">
                    <div className="cart-subheading">Order Total:</div>
                    <div className="price-cart">$ {totalAmount}</div>
                </div>

                <div className="cartsummary-hr" />
            <Link to="/paymentconfirm" ><div className="placeorder-Btn">Place your order</div> </Link>    
            </div>

            <Link to="/bag" >
                <div className="backBtn-div">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8251b7fe0ffd063f3d80a8ca0375889f3f023c9ea7d6bbfad7e3b97bf08367a9?"
                        className="backIcon"
                    />
                    <div className="backBtn">Back</div>
                </div>
            </Link>

        </div>
    );
};
