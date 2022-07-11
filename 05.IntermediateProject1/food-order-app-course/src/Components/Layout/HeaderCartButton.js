import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);
    const btnHighlightTimeout = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);
    return () => {
      clearTimeout(btnHighlightTimeout);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartCtx.items.reduce((acc, item) => {
          return acc + item.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
