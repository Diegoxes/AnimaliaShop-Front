import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductos } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const productos = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductos());
  }, []);

  return (
    <div className={style.Container}>
      {productos?.map((producto) => (
        <Card
          key={producto.id}
          id={producto.id}
          title={producto.title}
          image={producto.image}
          price={producto.price}
        />
      ))}
    </div>
  );
};

export default Cards;
