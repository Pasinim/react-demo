import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    console.log("In app.js" + JSON.stringify(expense));
    setExpenses((prevExpenses) => {
      return [
        {
          id: expense.id,
          title: expense.title,
          amount: expense.amount,
          date: expense.date,
        },
        ...prevExpenses,
      ];
    });
  };

  /**
   * Qui c'è del codice JSX, ovvero del codice html all'interno del codice Java.
   * Funziona grazie al setup che ha creato react e grazie al comando npm. Il codice trasfrmato è possibile visualizzarlo
   * nella pagine del browser con F12, è del codice abbastanza complesso che viene trasformato automaticamente
   */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
