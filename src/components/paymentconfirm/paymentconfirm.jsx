import "./paymentconfirm.css";
import React from "react";
import { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";
import checkicon from "../../assets/check.png"


const PaymentConfirm = () => {

    const { getTotalCartAmount } = useContext(AppleStoreContext);
    const totalAmount = getTotalCartAmount();

    return (
        <>
            <div class="bg">
                <div class="card">
                    <img src={checkicon}></img>
                    <h1 class="card__msg">Payment Complete</h1>
                    <h2 class="card__submsg">Thank you for your transfer</h2>
                    <div class="card__body">
                        <h1 class="card__price"><span>$ </span>{totalAmount}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentConfirm;
