import React from "react";

import "./Charts.css";
import ChartBar from "./ChartBar";

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
