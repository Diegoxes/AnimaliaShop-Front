import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsByCategory,
  restart,
  sortProductsByPrice,
} from "../../redux/actions";
import { ButtonList } from "../ButtonList/ButtonList";

export const Filtros = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.backupProductos);
  // console.log('All Products:', allProducts);

  const allCategories = [
    "All",
    ...new Set(allProducts.map((product) => product.category.toLowerCase())),
  ];

  const filterCategory = (category) => {
    if (category === "All") {
      dispatch(restart()); // Reiniciar la lista de productos
    } else {
      dispatch(filterProductsByCategory(category)); // Filtrar por categoría
    }
  };
  const handleSortByPrice = (order) => {
    // console.log('Sorting by Price:', order);

    dispatch(sortProductsByPrice(order));
  };
  // console.log(filteredProducts);

  return (
    <div className='mt-4 flex flex-col items-center'>
      <h4 className='text-lg font-semibold mb-2'>Categorías</h4>
      <div>
        <ButtonList
          categories={allCategories}
          filterCategory={filterCategory}
        />
      </div>
      <br />

      <div className='text-center'>
        <h4 className='text-lg font-semibold mb-2'>Ordenar por Precio</h4>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2'
          onClick={() => handleSortByPrice("asc")}>
          Ascendente
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
          onClick={() => handleSortByPrice("desc")}>
          Descendente
        </button>
      </div>
    </div>
  );
};
