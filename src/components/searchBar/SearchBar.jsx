import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.css';


export const SearchBar = () => {

    const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setItem(searchTerm);
    dispatch(filterName(searchTerm));

  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={item}
          name="search"
          onChange={handleChange}
          id="search"
          placeholder="Buscar producto"
          className={style.input}
        />
      </form>
    </div>
)
}
