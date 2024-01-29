import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.css";
import Banner from "../Banner/Banner";

const Layout = () => {
  const location = useLocation();

  const getBannerText = () => {
    switch (location.pathname) {
      case "/":
        return {
          texto: "Bienvenido a la pagina",
          imagen: "fondo.png",
        };
      case "/tienda":
        return {
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna turpis.",
          imagen:
            "https://fotos.perfil.com/2022/05/27/mercado-para-mascotas-1362928.jpg",
        };
    }
  };

  return (
    <div>
      <Banner banner={getBannerText()} />
      <div className={style.Container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
