import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterName } from '../../redux/actions';
import style from './SearchBar.module.css';

export const SearchBar = () => {
  const [productId, setProductId] = useState(''); 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (productId.trim() !== '') {
      dispatch(filterName(productId));
      setProductId('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={productId}  
          name="search"
          onChange={handleChange}
          id="search"
          placeholder="Buscar producto"
          className={style.input}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};