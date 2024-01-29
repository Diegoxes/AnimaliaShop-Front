import {
  FILTER_BY_NAME,
  PAGINATION,
  RESTART,
  // GET_BY_ID,
  // GET_TITLES,
  SET_PRODUCTS,
} from "./actionTypes";

const initialState = {
  productos: [],
  backupProductos: [],
  filteredProductos: [],
  filter: false,
  currentPage: 0,
  pageNumbers: [],
};

const rootReducer = (state = initialState, action) => {
  const ITEM_PER_PAGE = 3;
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productos: [...action.payload].splice(0, ITEM_PER_PAGE),
        backupProductos: action.payload,
        filteredProductos: action.payload,
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        filteredProductos: action.payload,
        productos: action.payload,
      };

    case RESTART:
      return {
        ...state,
        productos: [...state.backupProductos].splice(0, ITEM_PER_PAGE),
        filteredProductos: [...state.backupProductos],
      };

    case PAGINATION:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? nextPage * ITEM_PER_PAGE
          : prevPage * ITEM_PER_PAGE;

      if (
        action.payload === "next" &&
        firstIndex >= state.backupProductos.length
      )
        return state;
      if (action.payload === "prev" && prevPage < 0) return state;

      // Generación manual de números de página
      const totalPages = Math.ceil(
        state.backupProductos.length / ITEM_PER_PAGE
      );
      const pageNumbers = [];

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }

      return {
        ...state,
        productos: [...state.backupProductos].splice(firstIndex, ITEM_PER_PAGE),
        currentPage: action.payload === "next" ? nextPage : prevPage,
        filter: false,
        pageNumbers,
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
