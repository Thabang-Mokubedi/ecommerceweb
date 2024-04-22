import React from 'react';
import "./pages-style/checkout.css";
import { CartSummary } from '../components/cartsummary/cartsummary';
import { ShippingAddress } from '../components/cartsummary/shippingaddress';
import { PaymentMethod } from '../components/cartsummary/paymentmethod';
import { Cart } from '../components/cart/cart';

const Checkout = () => {
  return (
    <div className='columns-cartsummary'>
      
      <div className='column1checkout'>
        <ShippingAddress />
        <PaymentMethod />
        <Cart />
      </div>
      <div className='column2checkout'>
          <CartSummary />
      </div>

    </div>
  );
};

export default Checkout;