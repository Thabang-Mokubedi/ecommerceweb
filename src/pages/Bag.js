import React from 'react';
import "./pages-style/bag.css";
import { Link } from "react-router-dom";
import { Cart } from '../components/cart/cart';
import bagIcon from "../../src/assets/icons/checkout.png"
import Sidenav from '../components/sidenav/Sidenav';

const Bag = () => {
  return (
    <div>

      <div className='columns'>      
        <div className='column1' >
          <Sidenav />
        </div>
        <div className='column-2' >
        <h1 className='bagTitle'>Check your Bag Items</h1>
          <div className='bagsection'>
            <Cart />
          </div>
        </div>
        <div className='column-3' >
          <div>
            <h1 id='heading-cart'>Bag</h1>
          </div>
          <div className='sidecart'>
            <Cart />
          </div>
          <Link to="/checkout" className="ViewBag-Btn"> <img src={bagIcon} className='iconBag' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Bag;
