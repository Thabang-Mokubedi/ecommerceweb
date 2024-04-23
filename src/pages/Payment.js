import React from 'react';
import Payment from '../components/payment/Payment';
import "./pages-style/payment.css";
import Pc from '../components/payment/pc/pc';

const PaymentPage = () => {
  return (
    <div className='payment-body'>
    <Pc/>
    <Payment/>
    </div>
  )
}

export default PaymentPage;