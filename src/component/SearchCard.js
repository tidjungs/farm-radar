import React from 'react';

const SearchCard = ({ productName, selectProduct, active }) => (
  <div
    className="search-card"
    style={active ? { background: '#e0e0e0' } : {}}
  >
    <button
      className="product-btn" onClick={() => selectProduct()}
      style={active ? { color: '#17B897' } : { color: '#e0e0e0' }}
    >
      { productName }
    </button>
  </div>
);

export default SearchCard;
