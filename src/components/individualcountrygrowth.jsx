import React, { Component } from "react";
import GrowthChart from "../common/growthchart";
import "./chartspace.css";

class IndividualGrowth extends Component {

  render() {
    const { cases, deaths, recovered, name } = this.props;

    return (
      <React.Fragment>
        <GrowthChart
          data={cases}
          title={`🌐 ${name} CASES`}
          color="category10"
        />
        <div className="space"></div>
        <GrowthChart data={deaths} title={`☹️ ${name} DEATHS`} color="set1" />
        <div className="space"></div>
        <GrowthChart
          data={recovered}
          title={`🚑 ${name} RECOVERY`}
          color="dark2"
        />
        <div className="space"></div>
      </React.Fragment>
    );
  }
}

export default IndividualGrowth;
