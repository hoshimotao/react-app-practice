import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // props
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 191.67,
      date: new Date(2022, 5, 23),
    },
    { id: 2, title: "Phone Bill", amount: 131.23, date: new Date(2022, 5, 14) },
    {
      id: 3,
      title: "Car Payment",
      amount: 528.99,
      date: new Date(2022, 5, 15),
    },
    {
      id: 4,
      title: "Rent",
      amount: 1600,
      date: new Date(2022, 5, 1),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js was here!", expense);
  };

  return (
    <div>
      <h1> Monthly Expenses </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
