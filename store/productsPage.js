import data from "./data";

const initialState = {
  data,
  priceRange: 440,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "color-update":
      return {
        data: initialState.data.filter(
          (elem) => elem.bg === action.payload.bgColor
        ),
        priceRange: state.priceRange,
      };
    case "priceUpdate":
      return {
        data: initialState.data.filter(
          (elem) => elem.price <= action.payload.price
        ),
        priceRange: action.payload.price,
      };
  }
  return state;
}

export function colorUpdate(value) {
  return {
    type: "color-update",
    payload: {
      bgColor: value,
    },
  };
}

export function priceDomUpdate(value) {
  return {
    type: "priceUpdate",
    payload: {
      price: value,
    },
  };
}
