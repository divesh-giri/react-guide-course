import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveNewExpenseHandler = (enteredData) => {
    const data = {
      id: Math.random.toString(),
      ...enteredData,
    };
    props.onAddExpense(data);
    setIsAdding(false);
  };

  const showFormHandler = () => {
    setIsAdding(true);
  };
  const cancelFormHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {isAdding === false ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
