import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// props
const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 191.67,
    date: new Date(2022, 5, 23),
  },
  { id: 2, title: "Phone 1", amount: 131.23, date: new Date(2022, 5, 14) },
  {
    id: 3,
    title: "Car",
    amount: 528.99,
    date: new Date(2022, 5, 15),
  },
  {
    id: 4,
    title: "Housing",
    amount: 1600,
    date: new Date(2022, 5, 1),
  },
  {
    id: 5,
    title: "Gas",
    amount: 200,
    date: new Date(2022, 5, 2),
  },
  {
    id: 6,
    title: "Phone 2",
    amount: 50,
    date: new Date(2021, 4, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
