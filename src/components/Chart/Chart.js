import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* Mappo ogni valore del mese in una barra nel chart} */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
