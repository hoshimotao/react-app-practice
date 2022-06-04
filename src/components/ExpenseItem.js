import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // parent component = App.js
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.itemDate} />
      {/* passes property expenseDate to ExpenseItem component with props.itemDate */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
