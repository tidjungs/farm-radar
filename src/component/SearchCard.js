import React from 'react';

const SearchCard = ({ productName, selectProduct }) => (
  <div>
    <button onClick={() => selectProduct()}>
      { productName }
    </button>
  </div>
);

export default SearchCard;
