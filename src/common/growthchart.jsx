import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./growth.css";

const GrowthChart = ({ data, title, color }) => {
  return (
    <React.Fragment>
      <h3 class="growth">{title}</h3>
      <div className="worldwide">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
          curve="natural"
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickColor: "white",
            tickRotation: 70
          }}
          axisLeft={{
            orient: "left",
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 45
          }}
          enableGridX={false}
          colors={{ scheme: `${color}` }}
          lineWidth={3}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>
    </React.Fragment>
  );
};

export default GrowthChart;
