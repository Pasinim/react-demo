import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const filterChangeHandler = (selectedYear) => {
    setCurrentItems(
      props.items.filter((x) => x.date.getFullYear() == selectedYear)
    );
  };

  const [currentItems, setCurrentItems] = useState(props.items);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        {currentItems.map((x) => (
          <ExpenseItem
            key={x.title}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
