import React from 'react'
import { filterName } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './Card.module.css';

export const Card = ({id, title, manufacturer, stock, price, available, description, category}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(filterName(title));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
    return () => {
      // Puedes realizar tareas de limpieza si es necesario
    };
  }, [dispatch, title]);


  return (
    <div>
        <div className = {style.card}> 
            <p>PRODUCTO</p>
            <p>id {id}</p>
            <p> title {title}</p>
            <p> manufacturer {manufacturer}</p>
            <p>texto {stock}</p>
            <p>texto {price}</p>
            {/* <p>{image}</p> */}
            <p> texto {available}</p>
            <p> texto{description}</p>
            <p> texto{category}</p>
        </div>


    </div>
  )
}
