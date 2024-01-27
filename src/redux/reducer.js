import {
FILTER_BY_NAME} from "./actionTypes";


const initialState = {
    item: [],
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_BY_NAME:
        return {
          ...state,
          item: action.payload,
        };

        default:
            return {
            ...state,
            };
    };
}

export default rootReducer;
        
