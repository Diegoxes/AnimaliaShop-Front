import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.css";
import Banner from "../Banner/Banner";
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  const location = useLocation();

  const getBannerText = () => {
    switch (location.pathname) {
      case "/":
        return {
          texto: "La tienda de tu mascota!",
          imagen: "https://media.istockphoto.com/id/877490114/es/foto/accesorios-del-perro-sobre-fondo-amarillo-vista-superior-concepto-de-animales-y-mascotas.jpg?s=612x612&w=0&k=20&c=5q2oC1LVv0FWpg_jWEND4wGNbzYWWW-zgG0fu5Xoavg=",
        };
      case "/tienda":
        return {
          texto:
            "Todos los productos",
          imagen:
            "https://media.istockphoto.com/id/877490114/es/foto/accesorios-del-perro-sobre-fondo-amarillo-vista-superior-concepto-de-animales-y-mascotas.jpg?s=612x612&w=0&k=20&c=5q2oC1LVv0FWpg_jWEND4wGNbzYWWW-zgG0fu5Xoavg=",
        };
    }
  };

  return (
    <div>
      <Navbar />
      <Banner banner={getBannerText()} />
      <div className={style.Container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
//https://fotos.perfil.com/2022/05/27/mercado-para-mascotas-1362928.jpg