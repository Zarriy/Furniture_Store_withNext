import classes from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
export default function Checkout() {
  const cartItems = useSelector((state) => state.cartReducer);
  const cartPrice = cartItems.reduce(
    (acu, cur) => acu + cur.price * cur.quantity,
    0
  );
  const priceRef = useRef(0);
  useEffect(() => {
    animation(0, cartPrice, 10);
  }, []);

  const animation = (number, target, duration) => {
    if (number < target) {
      const interval = setInterval(function () {
        if (number >= target) {
          clearInterval(interval);
          return;
        }
        priceRef.current.innerText = `$ ${number++}`;
      }, Math.abs(Math.floor(duration / target)));
    }
  };

  return (
    <div className={classes.checkoutPage}>
      <span style={{ fontSize: "4rem" }}>💐</span>
      <p>Thanks for Placing your Order</p>
      <h2>
        You order is worth{" "}
        <span ref={priceRef} style={{ fontSize: "3rem" }}>
          $ {0}
        </span>
      </h2>
    </div>
  );
}
