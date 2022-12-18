import classes from "../../../styles/Home.module.css";
import BestCard from "../reuseable/bestSellerCards";
import { useRouter } from "next/router";
import data from "../../../store/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart";

export default function BestSelling() {
  const router = useRouter();
  function clickRouter(id) {
    router.push("/products/" + id);
  }
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className={classes.best}>
      <h2>Our Best Selling</h2>
      <p>Choose your Favorite from our best selling of this month</p>
      <div className={classes.bestProducts}>
        {data.map((bestSell, i) => {
          return i < 3 && i > 0 ? (
            <BestCard
              img={bestSell.image}
              key={bestSell.id}
              alt={bestSell.title}
              title={bestSell.title}
              price={bestSell.price}
              uponClick={() => clickRouter(bestSell.id)}
              addingToCart={() => addToCartHandler(bestSell)}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
