import {
  FILTER_BY_NAME,
  PAGINATION,
  RESTART,
  // GET_BY_ID,
  // GET_TITLES,
  SET_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  SORT_PRODUCTS_BY_PRICE
} from "./actionTypes";

const initialState = {
  productos: [],
  backupProductos: [],
  filteredProductos: [],
  filter: false,
  currentPage: 0,
  totalProductos: 0,
};

const rootReducer = (state = initialState, action) => {
  const ITEM_PER_PAGE = 5;
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productos: [...action.payload].splice(0, ITEM_PER_PAGE),
        backupProductos: action.payload,
        filteredProductos: action.payload,
        totalProductos: Math.ceil(
          [...state.backupProductos].length / ITEM_PER_PAGE
        ),
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        filteredProductos: action.payload,
        productos: action.payload,
        totalProductos: Math.ceil(action.payload.length / ITEM_PER_PAGE),
      };

    case RESTART:
      return {
        ...state,
        productos: [...state.backupProductos].splice(0, ITEM_PER_PAGE),
        filteredProductos: [...state.backupProductos],
        totalProductos: Math.ceil(
          [...state.backupProductos].length / ITEM_PER_PAGE
        ),
      };

    case PAGINATION:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? nextPage * ITEM_PER_PAGE
          : prevPage * ITEM_PER_PAGE;

      if (action.filter) {
        if (
          action.payload === "next" &&
          firstIndex >= state.backupProductos.length
        ) {
          return state;
        }

        if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          productos: [...state.filteredProductos].splice(
            firstIndex,
            ITEM_PER_PAGE
          ),
          currentPage: action.payload === "next" ? nextPage : prevPage,
          filter: true,
          totalProductos: Math.ceil(
            [...state.filteredProductos].length / ITEM_PER_PAGE
          ),
        };
      }

      if (
        action.payload === "next" &&
        firstIndex >= state.backupProductos.length
      )
        return state;
      if (action.payload === "prev" && prevPage < 0) return state;

      return {
        ...state,
        productos: [...state.backupProductos].splice(firstIndex, ITEM_PER_PAGE),
        currentPage: action.payload === "next" ? nextPage : prevPage,
        filter: false,
        totalProductos: Math.ceil(
          [...state.backupProductos].length / ITEM_PER_PAGE
        ),
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

    //////////////////////////////// F I L T E R S ////////////////////////////
    case FILTER_PRODUCTS_BY_CATEGORY:
  return {
    ...state,
    filteredProductos: action.payload,
    productos: action.payload.slice(0, ITEM_PER_PAGE),
    totalProductos: Math.ceil(action.payload.length / ITEM_PER_PAGE),
  };


  case SORT_PRODUCTS_BY_PRICE:
  return {
    ...state,
    filteredProductos: action.payload,
    productos: action.payload.slice(0, ITEM_PER_PAGE),
    totalProductos: Math.ceil(action.payload.length / ITEM_PER_PAGE),
  };


    ///////////////////////////////////////////////////////////////////////////

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
