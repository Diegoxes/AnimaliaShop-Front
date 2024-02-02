import axios from "axios";

import {
  FILTER_BY_NAME,
  SET_PRODUCTS,
  RESTART,
  PAGINATION,
  GET_DETAIL
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

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Error getting product detail: ${error}`);
    }
  };
};

//   export const getById = (id) => {
//     return async function (dispatch) {
//       try {
//         if (!id) {
//           console.error("Invalid id:", id);
//           return;
//         }

//         const response = await axios.get(`${URL}/products/${id}`);
//         console.log("Response from server:", response.data);
//         dispatch({
//           type: GET_BY_ID,
//           payload: response.data,
//         });
//       } catch (error) {
//         console.error("Error fetching item by id:", error.response?.data || error.message);
//         throw error;
//       }
//     };
//   };
