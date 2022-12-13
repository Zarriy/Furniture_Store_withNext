import classes from "../../../styles/Home.module.css";

export default function CartDrawer(props) {
  return (
    <div
      className={`${classes.cartDrawer} cartDrawer`}
      style={{ transform: `translateX(${props.transX}%)` }}
    >
      <h2>Cart</h2>
      <div className={classes.cartDrawerProd}>This is the cart section.</div>
      <button>Check Out</button>
    </div>
  );
}
