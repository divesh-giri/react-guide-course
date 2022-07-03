import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterYearHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const filteredExpenses = props.expensesProps.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
