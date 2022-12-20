import classes from "../../styles/Home.module.css";
import Image from "next/image";
import image from "../../public/furn-11:1.png";
import { useRouter } from "next/router";
import data from "../../store/data";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

export default function ProductPage(props) {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={classes.productsPage}>
      <div className={classes.productHero}>
        <div
          className={classes.ProductImage}
          style={{ backgroundColor: props.product.bg }}
        >
          <Image src={props.product.image} alt="product page image" />
        </div>
        <div className={classes.productAbout}>
          <h2>{props.product.title}</h2>
          <p>{props.product.description}</p>
          <h3>$ {props.product.price}</h3>
          <p style={{ position: "relative" }}>
            Color:{" "}
            {props.product.productColors.map((color) => (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  borderRadius: "50%",
                  backgroundColor: color,
                  marginLeft: ".6rem",
                  position: "absolute",
                  top: "0px",
                }}
                key={Math.random()}
              ></span>
            ))}
          </p>
          <button onClick={() => addToCartHandler(props.product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "1" } },
      { params: { pid: "2" } },
      { params: { pid: "3" }, params: { pid: "4" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export function getStaticProps(context) {
  // const router = useRouter();
  // const { pid } = router.query;
  const pid = context.params.pid;

  const product = data.find((products) => products.id == pid);

  return {
    // Passed to the page component as props
    props: { product },
  };
}
