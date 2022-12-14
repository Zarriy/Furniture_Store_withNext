import { uniImages } from "./data";

export const initialState = {
  Image: uniImages[0].uniImage,
};

export function imageActioner(payload) {
  return {
    type: "image-change",
    payload,
  };
}

export function uniReducer(state = initialState, action) {
  switch (action.type) {
    case "image-change":
      return { Image: action.payload };
  }
  return state;
}
