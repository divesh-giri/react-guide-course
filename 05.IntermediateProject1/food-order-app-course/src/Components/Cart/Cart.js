import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = () => {};

  const addCartItemHandler = () => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
