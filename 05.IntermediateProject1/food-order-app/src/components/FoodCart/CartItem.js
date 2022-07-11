import React from "react";

import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={classes["cart-item"]}>
        <div className={classes["cart-item-details"]}>
          <p>SUSHI</p>
          <div className={classes["item-price-count"]}>
            <p className={classes["price"]}>$2.99</p>
            <p className={classes["count"]}>x1</p>
          </div>
        </div>
        <div className={classes["item-add-remove"]}>
          <button className={classes["item-add"]}>+</button>
          <button className={classes["item-remove"]}>-</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
