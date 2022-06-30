import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (enteredData) => {
    props.onAddExpense(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
