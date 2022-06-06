import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // title is original state - setTitle is function to update title state

  const clickHandler = () => {
    // on click fires setTitle, passing argument with new data updates title
    setTitle("New Title");
    console.log(title);
  };
  // parent component = Expenses.js
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.itemDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}> Edit </button>
    </Card>
  );
}

export default ExpenseItem;
