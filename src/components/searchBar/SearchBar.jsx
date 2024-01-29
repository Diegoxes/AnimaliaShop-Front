import React, { useState, useEffect } from "react";
import style from "./SearchBar.module.css";

export const SearchBar = () => {
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setItem(searchTerm);
    dispatch(filterName(searchTerm));
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={item}
          name='search'
          onChange={handleChange}
          id='search'
          placeholder='Buscar producto'
          className={style.input}
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
};
