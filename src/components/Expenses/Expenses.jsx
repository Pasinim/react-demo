import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const filterChangeHandler = (selectedYear) => {
    setCurrentItems(
      props.items.filter((x) => x.date.getFullYear() == selectedYear)
    );
  };

  const [currentItems, setCurrentItems] = useState([]);

  //Per aggiornare gli items ogni volta che vengono aggiornati
  useEffect(() => {
    setCurrentItems(props.items);
  }, [props.items]);

  let expensesContent = <p>No items found.</p>;
  if (currentItems.length > 0) {
    expensesContent = currentItems.map((x) => (
      <ExpenseItem
        key={x.title}
        title={x.title}
        amount={x.amount}
        date={x.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}
export default Expenses;
