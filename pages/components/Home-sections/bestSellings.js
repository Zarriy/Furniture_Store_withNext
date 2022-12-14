import classes from "../../../styles/Home.module.css";
import BestCard from "../reuseable/bestSellerCards";

import data from "../../../store/data";

export default function BestSelling() {
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
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
