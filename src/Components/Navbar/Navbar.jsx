import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "../Login/Login";
import Logout from "../Logout/Logout";

const options = [
  { name: "Inicio", to: "/" },
  { name: "Sobre nosotros", to: "/about" },
  { name: "Tienda", to: "/tienda" },
  { name: "Contacto", to: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

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
              }`}>
              {option.name}
            </p>
          </Link>
        ))}
        {isAuthenticated ? (
          <button className={styles.button} onClick={() => navigate("/logout")}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <rect x='9' y='2' width='6' height='20' />
              <path d='M2 9h20' />
            </svg>

            <Logout />
          </button>
        ) : (
          <button className={styles.button} onClick={() => navigate("/login")}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M21 21V12.8a2 2 0 0 0-1-1.74l-8-4.57-8 4.57a2 2 0 0 0-1 1.74V21' />
              <polyline points='3.27 11 12 6.4 20.73 11' />
              <line x1='12' y1='22' x2='12' y2='6' />
            </svg>

            <Login />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
