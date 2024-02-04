import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { changePage } from "../../redux/actions";
import PaginationButtons from "../../components/PaginationButtons";
import { Filtros } from "../../components/Filtros/Filtros";

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
  <div className="flex items-center justify-center mt-8">
    <div>
      <div >
        <div className="w-full"> {/* Ajusta el ancho del SearchBar */}
          <SearchBar />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <Filtros />
      </div>
      <div>
        <Cards />
        <PaginationButtons />
      </div>
    </div>
  </div>
</>
  );
};

export default Tienda;