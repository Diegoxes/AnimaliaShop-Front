import {
  FILTER_BY_NAME,
  // GET_BY_ID,
  // GET_TITLES,
  SET_PRODUCTS,
} from "./actionTypes";

const initialState = {
  titles: [],
  productos: [],
  backupProductos: [],
};

const rootReducer = (state = initialState, action) => {
  const ITEM_PER_PAGE = 10;
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productos: [...action.payload].splice(0, ITEM_PER_PAGE),
        backupProductos: action.payload,
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        productos: action.payload,
      };
    // case GET_TITLES:
    //   return {
    //     ...state,
    //     Alltitle: action.payload,
    //   };
    // case GET_BY_ID:
    //   return {
    //     ...state,
    //     titleId: action.payload,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
