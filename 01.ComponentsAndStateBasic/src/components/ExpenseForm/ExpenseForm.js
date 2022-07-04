import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 1
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // 2
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // 3
  // const [userInput, setUserInput] = useState(() => {
  //   return {
  //     title: "",
  //     amount: "",
  //     date: "",
  //   };
  // });

  const inputTitleHandler = (e) => {
    // 1
    setTitle(e.target.value);

    // 2 (Not Recommended to Use, If current state depends on the previous one)
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });

    // 3 (Use to Update state if the previous state depends on it)
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: e.target.value,
    //   };
    // });
  };

  const inputAmountHandler = (e) => {
    // 1
    setAmount(e.target.value);

    // 2
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };

  const inputDateHandler = (e) => {
    // 1
    setDate(e.target.value);

    // 2
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveNewExpense(newExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={inputTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={inputAmountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            value={date}
            onChange={inputDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
