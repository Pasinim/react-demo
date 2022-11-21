import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [newExp, setNewExp] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExp(false);
  };

  const startEditingHandler = () => {
    setNewExp(true);
  };

  const stopEditingHandler = () => {
    setNewExp(false);
  };

  //onSaveExpensaData è una nuova funzione che viene chiamnata in ExpenseForm
  return (
    <div className="new-expense">
      {!newExp && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {newExp && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
