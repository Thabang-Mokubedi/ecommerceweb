// Importing the CSS file for styling
import "./shippingaddress.css";

// Importing necessary dependencies from React and react-router-dom
import { Link } from 'react-router-dom';
import React from "react";

// Defining the ShippingAddress functional component
export const ShippingAddress = () => {
    
    return (
        <div>
          {/* Container for the entire shipping address */}
          <div className="shippingaddress-div">
            {/* Heading for the shipping address */}
            <div className="shippingaddress-heading">Shipping Address</div>
            {/* Container for the address information */}
            <div className="addressinfo-div">
              {/* Container for individual address details */}
              <div className="address-info">
                <div className="addressinfo-text"> John Maker</div>
                <div className="addressinfo-text">123 Plae Grond Stret</div>
                <div className="addressinfo-text">Vermont, California</div>
                <div className="addressinfo-text">United States of America</div>
              </div>
              {/* Link to redirect to the root path */}
              <Link to="/address"><div className="change-btn">Change</div></Link>
            </div>
          </div>
        </div>
    );
};