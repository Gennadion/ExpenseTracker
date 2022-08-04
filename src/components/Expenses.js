import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
