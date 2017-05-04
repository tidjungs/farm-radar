import React from 'react';
import SearchCard from '../component/SearchCard';

const Search = ({ text, updateText, productData, selectProduct }) => (
  <div>
    <input
      type="text"
      value={text}
      onChange={e => updateText(e)}
      placeholder="type product here"
    />
    {
      productData.map(product =>
        <SearchCard
          key={product.id}
          productName={product.name}
          active={product.active}
          selectProduct={() => selectProduct(product.id)}
        />,
      )
    }
  </div>
);


export default Search;
