import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //--- --- --- ---
  //PERCHÈ COSI NON INIZIALIZZA?
  //raggruppo tutte le proprietà in un solo stato
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: ' ',
  //   enteredAmount: ' ',
  //   enteredDate: ' ',
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //con ... copio tutti i vecchi valori, sovrascrivo solo enteredTitle
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    /**
     * non è una buona pratica e potrebbe rompersi, quando aggiorno lo stato basandomi
     * sullo stato precedente, meglio fare così:
     */
    // setEnteredTitle((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    /**
     * Quando un form è inviato la pagina viene ricaricata con i valori di
     * default, per disabilitare questo comportamento uso questo metodo (funzione javascrtipt)
     */
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); //expenseData viene passato dal figlio newExpense
    setEnteredTitle(""); //quando invio un nuovo expense pulisce l'input
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //valore di default quando carica la pagina
            onChange={amountChangeHandler} //ascolto per l'input dell'utente
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel{" "}
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
