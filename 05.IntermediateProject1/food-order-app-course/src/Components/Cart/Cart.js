import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import OrderForm from "../OrderForm/OrderForm";

const Cart = (props) => {
  const [orderClick, setOrderClick] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderClickHandler = (e) => {
    setOrderClick(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, { ...item, amount: 1 })}
        />
      ))}
    </ul>
  );

  const CartModal = (
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
        {hasItems && (
          <button className={classes.button} onClick={orderClickHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );

  return (
    <>
      {orderClick ? (
        <OrderForm totalAmount={cartCtx.totalAmount} onClose={props.onClose} />
      ) : (
        CartModal
      )}
    </>
  );
};

export default Cart;
