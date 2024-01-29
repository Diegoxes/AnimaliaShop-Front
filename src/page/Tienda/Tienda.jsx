import React from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import style from "./tienda.module.css";

const Tienda = () => {
  return (
    <>
      <div className={style.Container}>
        <aside>
          <h3>Categoria</h3>
        </aside>
        <div>
          <SearchBar />
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tienda;
