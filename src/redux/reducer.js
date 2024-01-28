import { FILTER_BY_NAME, SET_PRODUCTS } from "./actionTypes";

const initialState = {
  item: [],
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
        item: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
