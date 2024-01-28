import {
FILTER_BY_NAME,
// GET_BY_ID,
// GET_TITLES,
} from "./actionTypes";


const initialState = {
  titles:[],
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_BY_NAME:
      return {
        ...state,
        titles: action.payload,
      }
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
            return state
    };
}

export default rootReducer;
        
