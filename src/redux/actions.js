import axios from "axios";

import { 
FILTER_BY_NAME
} from "./actionTypes";


export const filterName = (dogsName) =>{
    return async function (dispatch) {
      try {
        const dog = await axios.get(`http://localhost:3001/dogs?name=${dogsName}`);
        dispatch({
            type:FILTER_BY_NAME , 
            payload:dog.data
        });
      } catch (error) {
          console.error("Error fetching dogs:", error);
        }
    ;
  }
}