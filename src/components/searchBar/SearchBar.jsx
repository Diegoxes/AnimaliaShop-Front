import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.css';


export const SearchBar = () => {

    // const [item, setItem] = useState('');
	// const formatItem = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()

	// useEffect(() => {
	// 	setCountryFilter(formatItem)
	// },[setCountryFilter, formatItem])

  return (
    <div 
    className={style.content}
    >
  <input
    type='text'
    // name={item}
    onChange={e => setItem(e.target.value)}
    className={style.input}
    placeholder="Insertar búsqueda"
  />
    </div>
)
}
