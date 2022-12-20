import classes from "../../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../reuseable/cartItem";
import Link from "next/link";

export default function CartDrawer(props) {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleCheckoutClick = () => {
    setTimeout(() => dispatch({ type: "checkout" }), 1500);
  };

  const cartToDom = () => {
    return cartItems.map((item) => {
      return (
        <CartItem
          image={item.image}
          title={item.title}
          price={item.price * item.quantity}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      );
    });
  };
  const getTotal = cartItems.reduce(
    (acu, cur) => acu + cur.price * cur.quantity,
    0
  );
  return (
    <div
      className={`${classes.cartDrawer} cartDrawer`}
      style={{
        transform: `translateX(${props.transX}%)`,
      }}
    >
      <h2>Cart</h2>
      <div className={classes.cartDrawerProd}>
        {cartItems.length > 0 ? cartToDom() : "No item in the cart yet"}
      </div>
      <p style={{ textAlign: "right" }}>
        Total Price:
        <span className={classes.totalCartPrice}> $ {getTotal}</span>{" "}
      </p>
      <Link href="/checkout">
        <button
          className="checkoutBtn"
          style={{ width: "100%" }}
          onClick={handleCheckoutClick}
        >
          Check Out
        </button>
      </Link>
    </div>
  );
}
