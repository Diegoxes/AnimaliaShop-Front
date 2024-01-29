import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, title, price, image }) => {
  return (
    <Link to={`/tienda/${id}`}>
      <div className={style.ContainerCard}>
        <div className={style.ContainerImagen}>
          <img src={image} alt={title} />
        </div>
        <h2 className={style.CardTitle}>{title}</h2>
        <p className={style.CardPrice}>${price}</p>
        <button className={style.CardButton}>Comprar</button>
      </div>
    </Link>
  );
};

export default Card;
