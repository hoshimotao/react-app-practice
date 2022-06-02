import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h1> Let's Get Started </h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
