import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import style from "./tienda.module.css";
import { changePage } from "../../redux/actions";

const Tienda = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const totalProductos = useSelector((state) => state.totalProductos);

  const dispatch = useDispatch();

  const paginate = (event) => {
    const name = event.target.name;
    dispatch(changePage(name));
  };
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
            <div className={style.Paginate}>
              <button className={style.PrevPage} name='prev' onClick={paginate}>
                Prev
              </button>
              <span className={style.Enumeration}>
                {currentPage + 1} / {totalProductos}
              </span>
              <button className={style.NextPage} name='next' onClick={paginate}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tienda;
