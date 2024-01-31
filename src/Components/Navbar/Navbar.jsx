import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Login } from "../Login/Login";

const options = [
  { name: "Inicio", to: "/" },
  { name: "Sobre nosotros", to: "/about" },
  { name: "Tienda", to: "/tienda" },
  { name: "Testimonios", to: "/testimonials" },
  { name: "Contacto", to: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>Animalia</p>
      </div>

      {/* Botones */}
      <div className={styles.menu}>
        {options.map((option, index) => (
          <Link key={index} to={option.to}>
            <p
              className={`text-base ${
                location.pathname === option.to
                  ? "text-primary-500 dark:text-primary-500"
                  : ""
              }`}
            >
              {option.name}
            </p>
          </Link>
        ))}
        <button className={ styles.button } onClick={ () => navigate('/login') }>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 3v18h18M12 2v15l5-4" />
  </svg><Login/></button>
      </div>


    </nav>
  );
}

export default Navbar;
