import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { changePage, getProductos, setInitialCart } from "../../redux/actions";
import PaginationButtons from "../../components/PaginationButtons";
import { Filtros } from "../../components/Filtros/Filtros";

const Tienda = () => {
  const productos = useSelector((state) => state.productos);
  const currentPage = useSelector((state) => state.currentPage);
  const totalProductos = useSelector((state) => state.totalProductos);

  console.log("Total de Producto", totalProductos);
  console.log("current Page: ", currentPage);

  const carrito = useSelector((state) => state.carrito);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProductos());
  }, []);

  return (
    <div className='container mx-auto'>
      <div>
        <div className='w-full'>
          {" "}
          {/* Ajusta el ancho del SearchBar */}
          <SearchBar />
        </div>
      </div>
      <div className='mt-4 mb-4'>
        <Filtros />
      </div>
      <div className=''>
        <Cards productos={productos} />
        <PaginationButtons
          totalProductos={totalProductos}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Tienda;
