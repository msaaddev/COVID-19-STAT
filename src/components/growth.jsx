import React, { Component } from "react";
import axios from "axios";
import GrowthChart from "../common/growthchart";
import "./chartspace.css";

class Growth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphID: { id: "WorldWide" },
      graphColor: { color: "hsl(355, 70%, 50%)" },
      worldWideCases: [],
      worldWideDeaths: [],
      worldWideRecovered: []
    };
  }

  componentDidMount = async () => {
    const { data: apiData } = await axios.get(
      `https://corona.lmao.ninja/v2/historical/all`
    );

    const formattingAPIDATA = apiInfo => {
      let dateArr = Object.keys(apiData[apiInfo]);
      let arr = [{ ...this.state.graphID, ...this.state.graphColor, data: [] }];
      for (let i = 0; i < dateArr.length; i += 7) {
        let axix = {
          x: dateArr[i],
          y: apiData[apiInfo][dateArr[i]]
        };
        arr[0].data.push(axix);
      }

      return arr;
    };

    this.setState({
      worldWideCases: formattingAPIDATA("cases"),
      worldWideDeaths: formattingAPIDATA("deaths"),
      worldWideRecovered: formattingAPIDATA("recovered")
    });
  };

  render() {
    const { worldWideCases, worldWideDeaths, worldWideRecovered } = this.state;
    return (
      <React.Fragment>
        <GrowthChart
          data={worldWideCases}
          title="🌐 WORLDWIDE CASES"
          color="category10"
        />
        <div className="space"></div>
        <GrowthChart
          data={worldWideDeaths}
          title="☹️ WORLDWIDE DEATHS"
          color="set1"
        />
        <div className="space"></div>
        <GrowthChart
          data={worldWideRecovered}
          title="🚑 WORLDWIDE RECOVERY"
          color="dark2"
        />
        <div className="space"></div>
      </React.Fragment>
    );
  }
}

export default Growth;
