import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((x) => (
        <ExpenseItem key = {x.title} title={x.title} amount={x.amount} date={x.date} />
      ))}
    </Card>
  );
}
export default Expenses;