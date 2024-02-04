import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changePage, getProductos, addToCart } from "../../redux/actions";
import Card from "../Card/Card";
import Carrito from "../Carrito/Carrito";

const Cards = () => {
  const productos = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.carrito);
  useEffect(() => {
    dispatch(getProductos());
  }, []);

  return (
    <>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {productos?.map((producto) => (
          <Card
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            price={producto.price}
            category={producto.category}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
