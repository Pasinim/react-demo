import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const filterChangeHandler = (selectedYear) => {
    setCurrentItems(
      props.items.filter((x) => x.date.getFullYear() == selectedYear)
    );
  };

  const deleteCurrentItem = (id) => {
    setCurrentItems((prevItems) => prevItems.filter((x) => x.id != id));
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
        key={x.id}
        id={x.id}
        title={x.title}
        amount={x.amount}
        date={x.date}
        deleteCurrentItem={deleteCurrentItem}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={currentItems} />
        {expensesContent}
      </Card>
    </div>
  );
}
export default Expenses;
