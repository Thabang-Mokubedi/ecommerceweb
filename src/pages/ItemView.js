import React from 'react';
import "./pages-style/Itemview.css";
import { Link } from "react-router-dom";
import { Cart } from '../components/cart/cart';
import bagIcon from "../../src/assets/icons/checkout.png";
import Sidenav from '../components/sidenav/Sidenav';
import Item1 from '../components/ItemView/Itemview';

const ItemView = () => {
  return (
    <div>

      <div className='columns'>   

        <div className='column1' >
          <Sidenav />
        </div>

        <div className='column-2' >
          <div className='bagsection'>
            <Item1 />
          </div>
        </div>

        <div className='column-3' >
          <div>
            <h1 id='heading-cart'>Bag</h1>
          </div>
          <div className='sidecart'>
            <Cart />
          </div>
          <Link to="/bag" className="ViewBag-Btn">
          <img src={bagIcon} className='iconBag' /> {/* Display the bag icon */}
        </Link>
        </div>

      </div>
    </div>
  )
}

export default ItemView;