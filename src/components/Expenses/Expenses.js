import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  // parent component = App.js
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title} // Car Insurance
        amount={props.items[0].amount} // 191.67
        itemDate={props.items[0].date} // 2022, 5, 23 OR June 23 2022
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        itemDate={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        itemDate={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        itemDate={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
