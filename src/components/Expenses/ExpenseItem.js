import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
  //javascript array decostruction, l prima variabile è un puntatore mentre setTitle è una 
  //funzione che può essere chiamata per modificare il valore della variabile
  const [title, setTitle]  = useState(props.title); //devono essere chiamate sempre qui


  const clickHandler = () => {
    setTitle("Updated")
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
