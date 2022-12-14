import classes from "../../../styles/Home.module.css";
import { uniImages } from "../../../store/data";
import Button from "../reuseable/button";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { imageActioner } from "../../../store/uniImg";

export default function Uni() {
  const uniIm = useSelector((state) => state.imageReducer.Image);
  const setUniIm = useDispatch();
  // const [uniIm, setUniIm] = useState(uniImages[0].uniImage);

  const changeImage = (img) => {
    uniImages.map((img) => (img.selected = false));
    const obj = uniImages.find((elem) => elem.bg === img.bg);
    obj.selected = true;
    setUniIm(imageActioner(obj.uniImage));
    // setUniIm(obj.uniImage);
  };

  return (
    <div className={classes.uniSection}>
      <div className={classes.uniLeft}>
        <h2>Catch 22 Sofa</h2>
        <p>
          This sofa is designed for providing you ultimate pleasure and delight.
          Furnish your home with us and stay in fashion.
        </p>
        <h3>$ 550</h3>
        <div className={classes.uniColor}>
          {uniImages.map((image) => (
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: image.bg,
                borderRadius: "50%",
                marginBottom: "2rem",
                cursor: "pointer",
                border: image.selected && "2px solid white",
              }}
              key={image.id}
              onClick={() => changeImage(image)}
            ></div>
          ))}
        </div>
        <Button title="Add to Cart" class="btn-uni btn-uni-01" />
        <Button title="View all Products" class="btn-uni btn-uni-02" />
      </div>
      <div className={classes.uniImage}>
        <Image
          src={uniIm}
          alt="this is the second image"
          className="uni-img2"
        />
      </div>
    </div>
  );
}
