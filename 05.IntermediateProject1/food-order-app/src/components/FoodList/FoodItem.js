import React, { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button/Button";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const orderAmountRef = useRef();
  const [orderData, setOrderData] = useState([]);
  const addItemOrderHandler = (e) => {
    e.preventDefault();
    if (!orderAmountRef.current.value) return;
    setOrderData((prevState) => {
      const itemIndex = prevState.findIndex(
        (meal) => meal.id === props.meal.id
      );
      if (itemIndex !== -1) {
        prevState[itemIndex].item_count += +orderAmountRef.current.value;
        return prevState;
      }
      return [
        ...prevState,
        {
          item_name: props.meal.name,
          item_count: +orderAmountRef.current.value,
          item_price: props.meal.price,
          id: props.meal.id,
        },
      ];
    });
    cartCtx.data = orderData;
  };

  return (
    <>
      <div className={classes["food-item-container"]}>
        <div className={classes["food-item-description"]}>
          <p className={classes["food-item-name"]}>{props.meal.name}</p>
          <p className={classes["food-item-text"]}>{props.meal.description}</p>
          <p className={classes["food-item-price"]}>${props.meal.price}</p>
        </div>
        <div className={classes["food-item-order-details"]}>
          <div className={classes["amount-input"]}>
            <label>Amount</label>
            <input ref={orderAmountRef} type="number" min="1" />
          </div>
          <Button
            className={classes["order-count-btn"]}
            type="button"
            onClick={addItemOrderHandler}
          >
            +Add
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FoodItem;
