import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// STATELESS COMPONENT - JUST OUTPUT DATA
function ExpenseItem(props) {
  // parent component = Expenses.js
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.itemDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
