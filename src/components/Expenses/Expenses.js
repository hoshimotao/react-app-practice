import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // parent component = App.js

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
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
    </div>
  );
}

export default Expenses;
