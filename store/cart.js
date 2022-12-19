const initialState = [];

export const addToCart = (product) => {
  return {
    type: "addToCart",
    payload: product,
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "addToCart":
      const alreadyPresent = state.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyPresent) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [...state, action.payload];
    case "checkout":
      return [];
  }
  return state;
}

// add the logic that if there are one item already then increase the quantity, else increase the
