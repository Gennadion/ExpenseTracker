import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredArray = props.array.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={filterChangeHandler}
        />
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
};

export default Expenses;
