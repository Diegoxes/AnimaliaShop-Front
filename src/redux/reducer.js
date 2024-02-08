import {
  ADD_TO_CART,
  CLEAR_CART,
  FILTER_BY_NAME,
  FILTER_PRODUCTS_BY_CATEGORY,
  GET_DETAIL,
  PAGINATION,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  RESTART,
  SET_INITIAL_CART,
  // GET_BY_ID,
  // GET_TITLES,
  SET_PRODUCTS,
  SORT_PRODUCTS_BY_PRICE,
} from "./actionTypes";

const initialState = {
  productos: [],
  backupProductos: [],
  filteredProductos: [],
  filter: false,
  currentPage: 1,
  totalProductos: 0,
  carrito: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  const ITEM_PER_PAGE = 4;
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

    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

      case PAGINATION:
        let nextPage, prevPage;
        if (state.filter) {
          nextPage = state.currentPage + 1;
          prevPage = state.currentPage - 1;
        } else {
          nextPage = Math.min(state.currentPage + 1, state.totalProductos);
          prevPage = Math.max(state.currentPage - 1, 1);
        }
      
        const firstIndex =
          action.payload === "next"
            ? nextPage * ITEM_PER_PAGE - ITEM_PER_PAGE
            : prevPage * ITEM_PER_PAGE - ITEM_PER_PAGE;
      
        if (action.filter) {
          if (
            action.payload === "next" &&
            firstIndex >= state.filteredProductos.length
          ) {
            return state;
          }
      
          if (action.payload === "prev" && prevPage < 1) return state;
      
          return {
            ...state,
            productos: state.filteredProductos.slice(firstIndex, firstIndex + ITEM_PER_PAGE),
            currentPage: action.payload === "next" ? nextPage : prevPage,
            filter: true,
            totalProductos: Math.ceil(state.filteredProductos.length / ITEM_PER_PAGE),
          };
        }
      
        if (
          action.payload === "next" &&
          firstIndex >= state.backupProductos.length
        ) return state;
        
        if (action.payload === "prev" && prevPage < 1) return state;
      
        return {
          ...state,
          productos: state.backupProductos.slice(firstIndex, firstIndex + ITEM_PER_PAGE),
          currentPage: action.payload === "next" ? nextPage : prevPage,
          filter: false,
          totalProductos: Math.ceil(state.backupProductos.length / ITEM_PER_PAGE),
        };
      
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

    // Reducer para el carrito

    case ADD_TO_CART:
      const newItem = state.backupProductos.find(
        (item) => item.id === action.payload
      );

      // { id: 2, title: "pooph" }

      // newItem = busca el id que es pasado por el action en la base de datos

      const itemsCart = state.carrito.find((item) => item.id === newItem.id);

      // busca el id en el carrito de compras

      // {id: 2, title: "pooph"} === {id: 3, title: "ropa"}

      return itemsCart
        ? {
            ...state,
            carrito: state.carrito.map(
              (
                producto // [{ id: 2, title: 'pooph }] === {id:2}
              ) =>
                producto.id === newItem.id
                  ? { ...producto, cantidad: producto.cantidad + 1 }
                  : producto
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, { ...newItem, cantidad: 1 }],
          };

    case REMOVE_ONE_FROM_CART:
      const SearchProductCart = state.carrito.find(
        (item) => item.id === action.payload
      );

      return SearchProductCart.cantidad > 1
        ? {
            ...state,
            carrito: state.carrito.map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    cantidad: item.cantidad - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            carrito: state.carrito.filter((item) => item.id !== action.payload),
          };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload),
      };
    case SET_INITIAL_CART:
      return {
        ...state,
        carrito: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
