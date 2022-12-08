import classes from "../../../styles/Home.module.css";
import NewCard from "../reuseable/cards-1";
import data from "../data";

export default function NewIn() {
  return (
    <div className={classes.newIn}>
      <h2>New In</h2>
      <p>Select from our latest product catalogue</p>
      <ul>
        <li>Sofa</li>
        <li>Chair</li>
        <li>All</li>
      </ul>
      <div className={classes.productsNew}>
        {data.map((prod) => (
          <NewCard img={prod.image} bg={prod.bg} title={prod.title} />
        ))}
      </div>
    </div>
  );
}
