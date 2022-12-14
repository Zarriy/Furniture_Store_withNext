import { configureStore } from "@reduxjs/toolkit";
import data from "./data";
import { uniReducer } from "./uniImg";
import { combineReducers } from "@reduxjs/toolkit";

export const dataSelector = (type, parameter) => {
  return {
    type,
    payload: parameter,
  };
};

const initialState = {
  data,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "updateList":
      return {
        data: initialState.data.filter((data) => data.type === action.payload),
      };
    case "all":
      return { data: initialState.data };
  }
  return state;
}

const rootReducer = combineReducers({
  dataReducer,
  imageReducer: uniReducer,
});

let store = configureStore({ reducer: rootReducer });

export default store;
