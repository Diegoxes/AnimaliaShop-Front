import React from "react";
import style from "./Banner.module.css";

const Banner = ({ banner }) => {
  return (
    <div className={style.ContainerBanner}>
      <div className={style.ContainerImagen}>
        {/* <img src={banner.imagen} alt='' />  */}

        <div className={style.ContainerTexto}>
          {/* <h1> {banner.texto}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
