import classes from "../../../styles/Home.module.css";
import Image from "next/image";
import Button from "./button";

export default function BestCard(props) {
  return (
    <div className={classes.bestProduct}>
      <Image src={props.img} alt={props.alt} onClick={props.uponClick} />
      <h4>{props.title}</h4>
      <p>$ {props.price}</p>
      <Button
        title="add to cart"
        class="btn-bestSeller"
        clickHandler={props.addingToCart}
      />
    </div>
  );
}
