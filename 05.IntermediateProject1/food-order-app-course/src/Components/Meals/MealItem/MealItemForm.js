import { useRef } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (!enteredAmount) {
      console.log("error");
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <>
      <form onSubmit={onSubmitFormHandler} className={classes.form}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <button type="submit">+Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
