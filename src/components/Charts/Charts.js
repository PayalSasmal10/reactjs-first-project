import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

export default Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
      ;
    </div>
  );
};
