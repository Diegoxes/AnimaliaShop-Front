import axios from "axios";

import { 
FILTER_BY_NAME
} from "./actionTypes";


export const filterName = (itemName) =>{
    return async function (dispatch) {
      try {
        const item = await axios.get(`URL`);
        dispatch({
            type:FILTER_BY_NAME , 
            payload:item.data
        });
      } catch (error) {
          console.error("Error fetching item:", error);
        }
    ;
  }
}