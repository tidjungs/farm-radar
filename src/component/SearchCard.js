import React from 'react';

const SearchCard = ({ productName, selectProduct, active }) => (
  <div style={active ? { background: 'red' } : { background: 'white' }}>
    <button onClick={() => selectProduct()}>
      { productName }
    </button>
  </div>
);

export default SearchCard;
