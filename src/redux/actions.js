import axios from "axios";

import {
  FILTER_BY_NAME,
  SET_PRODUCTS,
  RESTART,
  PAGINATION,
  SORT_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_CATEGORY
} from "./actionTypes";

const URL = "http://localhost:3001";

export const getProductos = () => async (dispatch) => {
  try {
    const { data } = await axios(URL + "/products");
    return dispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log("SUCEDIO UN ERROR AL REQUERIR LOS PRODUCTOS...");
  }
};

export const filterName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/title/${name}`
      );
      console.log("Response from server:", response.data);
      return dispatch({
        type: FILTER_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(
        "Error fetching items:",
        error.response?.data || error.message
      );
    }
  };
};

export const restart = () => async (dispatch) => {
  try {
    return dispatch({
      type: RESTART,
    });
  } catch (error) {
    alert(error.response.data.error);
  }
};

export const changePage = (order) => async (dispatch) => {
  console.log(order);

  try {
    return dispatch({
      type: PAGINATION,
      payload: order,
    });
  } catch (error) {
    alert(error.response.data.error);
  }
};
///////////////////// F I L T E R S /////////////////////////////////////////

export const filterProductsByCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/products`, {
      params: {
        category: category,
      },
    });
    console.log("Response from server:", response.data);
    return dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: response.data,
    });
  } catch (error) {
    console.error(
      "Error filtering products by category:",
      error.response?.data || error.message
    );
  }
};

export const sortProductsByPrice = (order) => (dispatch, getState) => {
  const { filteredProductos } = getState();

  // (ascendente o descendente)
  const sortedProducts = [...filteredProductos].sort((a, b) => {
    if (order === 'asc') {
      return a.price - b.price;
    } else if (order === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });
 
  dispatch({
    type: SORT_PRODUCTS_BY_PRICE,
    payload: sortedProducts,
  });
};
//////////////////////////////////////////////////////////////////////////////////////7

