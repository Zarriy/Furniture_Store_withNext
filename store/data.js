import image4 from "../public/furn-11:1.png";
import image2 from "../public/furn-12:1.png";
import image1 from "../public/furn_store-01.png";
import image3 from "../public/product-3-1.png";

import uniBlackImage from "../public/sofa-col/black.png";
import uniDarkImage from "../public/sofa-col/dark.png";
import uniLightImage from "../public/sofa-col/light.png";
import uniWhiteImage from "../public/sofa-col/white.png";

export default [
  {
    title: "Brand New Sofa",
    type: "Chair",
    bg: "#86ADB933",
    image: image1,
    productColors: ["black"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    id: 1,
    price: 399,
    quantity: 1,
  },
  {
    title: "Antique Style Stool",
    bg: "#F8FFCB",
    type: "Chair",
    image: image2,
    productColors: ["yellow"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    id: 2,
    price: 288,
    quantity: 1,
  },
  {
    title: "Best Selling ",
    type: "Chair",
    productColors: ["#ed820e"],
    bg: "#F3CAA3",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    id: 3,
    price: 374,
    quantity: 1,
  },
  {
    title: "strang Behaviour",
    type: "Sofa",
    productColors: ["#f2dcad"],
    bg: "#F6F2E6",
    image: image4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    id: 4,
    price: 878,
    quantity: 1,
  },
];

export const uniImages = [
  {
    title: "Catch 22 Sofa",
    bg: "black",
    image: uniBlackImage,
    id: 21,
    selected: true,
    price: 549,
    quantity: 1,
  },
  {
    title: "Catch 22 Sofa",
    bg: "#70543e",
    image: uniDarkImage,
    id: 22,
    price: 499,
    quantity: 1,
  },
  {
    title: "Catch 22 Sofa",
    bg: "#adb5bd",
    image: uniLightImage,
    id: 23,
    price: 589,
    quantity: 1,
  },
  {
    title: "Catch 22 Sofa",
    bg: "#e9ecef",
    image: uniWhiteImage,
    id: 24,
    price: 499,
    quantity: 1,
  },
];
