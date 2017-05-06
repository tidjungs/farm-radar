import React from 'react';

const SearchCard = ({ productName, selectProduct, active }) => (
  <div
    className="search-card"
    style={active ? { background: '#A0E9D4' } : { background: 'none' }}
  >
    <button className="product-btn" onClick={() => selectProduct()}>
      { productName }
    </button>
  </div>
);

export default SearchCard;
