import classes from "../../styles/Home.module.css";
import Image from "next/image";
import image from "../../public/furn-11:1.png";
import { useRouter } from "next/router";
import data from "../../store/data";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

export default function ProductPage(props) {
  const router = useRouter();
  const { pid } = router.query;
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const product = data.find((products) => products.id == pid);

  return (
    <div className={classes.productsPage}>
      <div className={classes.productHero}>
        <div
          className={classes.ProductImage}
          style={{ backgroundColor: product.bg }}
        >
          <Image src={product.image} alt="product page image" />
        </div>
        <div className={classes.productAbout}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>$ {product.price}</h3>
          <p>
            Color:{" "}
            {product.productColors.map((color) => (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  borderRadius: "50%",
                  backgroundColor: color,
                  marginLeft: "1rem",
                }}
                key={Math.random()}
              ></span>
            ))}
          </p>
          <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
