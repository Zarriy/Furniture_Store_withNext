import classes from "../../../styles/Home.module.css";
import Image from "next/image";
import img from "../../../public/sofa-col/light.png";

export default function CartItem(props) {
  return (
    <div className={classes.cartItem} key={props.id}>
      <div className={classes.cartItemImageBox}>
        <Image src={props.image} alt="cart item" />
      </div>
      <div className={classes.cartItemAbout}>
        <h2>{props.title}</h2>
        <p>Quantity: {props.quantity}</p>
        <p>$ {props.price}</p>
      </div>
    </div>
  );
}
