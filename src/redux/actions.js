import axios from "axios";

import { 
FILTER_BY_NAME,
} from "./actionTypes";



export const filterName = (name) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/products/title/${name}`);
        console.log("Response from server:", response.data);
        return dispatch({
          type: FILTER_BY_NAME,
          payload: response.data
        });
      } catch (error) {
        console.error("Error fetching items:", error.response?.data || error.message);
      }
    };
  }


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