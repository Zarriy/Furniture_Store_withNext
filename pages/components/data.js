import image4 from "../../public/furn-11:1.png";
import image2 from "../../public/furn-12:1.png";
import image1 from "../../public/furn_store-01.png";
import image3 from "../../public/product-3-1.png";

import uniBlackImage from "../../public/sofa-col/black.png";
import uniDarkImage from "../../public/sofa-col/dark.png";
import uniLightImage from "../../public/sofa-col/light.png";
import uniWhiteImage from "../../public/sofa-col/white.png";
export default [
  {
    title: "Brand New Sofa",
    type: "Chair",
    bg: "#86ADB933",
    image: image1,
    id: 1,
    price: 399,
  },
  {
    title: "Antique Style Stool",
    bg: "#F8FFCB",
    type: "Chair",
    image: image2,
    id: 2,
    price: 288,
  },
  {
    title: "Best Selling ",
    type: "Chair",
    bg: "#F3CAA3",
    image: image3,
    id: 3,
    price: 374,
  },
  {
    title: "strang Behaviour",
    type: "Sofa",
    bg: "#F6F2E6",
    image: image4,
    id: 4,
    price: 878,
  },
];

export const uniImages = [
  { bg: "black", uniImage: uniBlackImage, id: 21, selected: true },
  { bg: "#70543e", uniImage: uniDarkImage, id: 22 },
  {
    bg: "#adb5bd",
    uniImage: uniLightImage,
    id: 23,
  },
  {
    bg: "#e9ecef",
    uniImage: uniWhiteImage,
    id: 24,
  },
];
