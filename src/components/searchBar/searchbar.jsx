import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor="searchQueryInput">
        Search Item
      </label>
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          className="searchInput"
        />
        <button
          
          type="submit"
          
          className="searchButton"
        >

        </button>
      </div>
    </div>
  );
};

export default SearchBar;
