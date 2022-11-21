import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "GEN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAG", value: 0 },
    { label: "GIU", value: 0 },
    { label: "LUG", value: 0 },
    { label: "AGO", value: 0 },
    { label: "SET", value: 0 },
    { label: "OTT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DIC", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
