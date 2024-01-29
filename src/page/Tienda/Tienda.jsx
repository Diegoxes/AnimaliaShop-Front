import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import style from "./tienda.module.css";
import { changePage } from "../../redux/actions";

const Tienda = () => {
  const enumeration = useSelector((state) => state.pageNumbers);

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
              <button name='prev' onClick={paginate}>
                Prev
              </button>
              {enumeration?.map((enumerate) => (
                <p>{enumerate}</p>
              ))}
              <button name='next' onClick={paginate}>
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
