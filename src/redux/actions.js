import axios from "axios";

import { FILTER_BY_NAME, SET_PRODUCTS } from "./actionTypes";

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

export const filterName = (dogsName) => {
  return async function (dispatch) {
    try {
      const dog = await axios.get(URL + `/products?title=${dogsName}`);
      dispatch({
        type: FILTER_BY_NAME,
        payload: dog.data,
      });
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };
};
