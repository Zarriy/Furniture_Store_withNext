import { uniImages } from "./data";

export const initialState = {
  product: uniImages,
};

export function imageActioner(id) {
  return {
    type: "image-change",
    payload: id,
  };
}

export function uniReducer(state = initialState, action) {
  switch (action.type) {
    case "image-change":
      return {
        product: state.product.map((prod) =>
          prod.id === action.payload
            ? { ...prod, selected: true }
            : { ...prod, selected: false }
        ),
      };
  }
  return state;
}
// this is becoming a more complex state for handling and manipulating.
// I have to keep the whole state intact and only alter the one that required the alteration.
