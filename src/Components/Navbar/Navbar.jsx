import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const options = [
  { name: "Inicio", to: "/" },
  { name: "Sobre nosotros", to: "/about" },
  { name: "Tienda", to: "/store" },
  { name: "Testimonios", to: "/testimonials" },
  { name: "Contacto", to: "/contact" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>Animalia</p>
      </div>

      {/* Botones */}
      <div className={styles.menu-options}>
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

        <button>
        <Link to="/login">
          <p className={styles.button}>Login</p>
        </Link>
        </button>
      </div>


    </nav>
  );
}

export default Navbar;
