import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { changePage, setInitialCart } from "../../redux/actions";
import PaginationButtons from "../../components/PaginationButtons";
import { Filtros } from "../../components/Filtros/Filtros";

const Tienda = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const totalProductos = useSelector((state) => state.totalProductos);
  const carrito = useSelector((state) => state.carrito);

  const dispatch = useDispatch();

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem("carrito"));
    dispatch(setInitialCart(storeCart));
    console.log("Cart to be stored:", storeCart);
  }, [dispatch]);

  const paginate = (event) => {
    const name = event.target.name;
    dispatch(changePage(name));
  };

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
        <Cards />
        <PaginationButtons />
      </div>
    </div>
  );
};

export default Tienda;
