import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from 'react';
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
};

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
        <ExpenseItem
          title={props.array[0].title}
          amount={props.array[0].amount}
          date={props.array[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.array[1].title}
          amount={props.array[1].amount}
          date={props.array[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.array[2].title}
          amount={props.array[2].amount}
          date={props.array[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.array[3].title}
          amount={props.array[3].amount}
          date={props.array[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
