import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.css';


export const SearchBar = (onSearch, setCountryFilter) => {

    // const [item, setItem] = useState('');
	// const formatItem = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()

	// useEffect(() => {
	// 	setCountryFilter(formatItem)
	// },[setCountryFilter, formatItem])

    // useEffect(() => {
    //     dispatch(filter({ filterType: "**", filterValue: *** }));
    //     if (**.length >= 30) {
    //       dispatch(get**(**)).then((res) => {
    //         setSearchResult(res.payload);
    //       });
    //     }
    //     dispatch(orderName("Ascendente"));
    //   }, [dispatch, ]);


      function handleSearch(name) {
        dispatch(getCountryByName(name)).then((res) => {
          setSearchResult(res.payload);
        });
      }
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
