// Import necessary dependencies and components
import React from 'react';
import { Shop } from '../components/shop/shop'; // Import the Shop component
import "./pages-style/dashboard.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom for navigation
import { Cart } from '../components/cart/cart'; // Import the Cart component
import bagIcon from "../../src/assets/icons/ButtonViewbag.png"; // Import the bag icon image
import Sidenav from '../components/sidenav/Sidenav'; // Import the Sidenav component
import SearchBar from '../components/searchBar/searchbar';

// Define the Dashboard component as a functional component
const Dashboard = () => {
  return (
    <div className='columns'> 
      <div className='column1'> 
        <Sidenav /> {/* Render the Sidenav component */}
      </div>
      <div className='column2'> 
      <SearchBar />
        <Shop /> {/* Render the Shop component */}
      </div>
      <div className='column3'> 
        <div> {/* Container div for the cart heading */}
          <h1 id='heading-cart'>Bag</h1> 
        </div>
        <div className='sidecart'> 
          <Cart /> {/* Render the Cart component */}
        </div>
        {/* Link component for navigating to the '/bag' route */}
        <Link to="/bag" className="ViewBag-Btn">
          <img src={bagIcon} className='iconBag' /> {/* Display the bag icon */}
        </Link>
      </div>
    </div>
  );
};

export default Dashboard; // Export the Dashboard component as the default export
