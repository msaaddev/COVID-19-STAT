import React, { Component } from "react";
import { ResponsiveLine, Line } from "@nivo/line";
import axios from "axios";
import "./growth.css";

class Growth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphID: { id: "WorldWide" },
      graphColor: { color: "hsl(209, 70%, 50%)" },
      worldWideCases: [],
      worldWideDeaths: [],
      worldWideRecovered: []
    };
  }

  componentDidMount = async () => {
    const { data: apiData } = await axios.get(
      `https://corona.lmao.ninja/v2/historical/all`
    );

    const workedAPIDATA = apiInfo => {
      let dateArr = Object.keys(apiData[apiInfo]);
      let arr = [{ ...this.state.graphID, ...this.state.graphColor, data: [] }];
      let dataXANDY = [];

      for (let i = 0; i < dateArr.length; i++) {
        let axix = {
          x: dateArr[i],
          y: apiData[apiInfo][dateArr[i]]
        };
        arr[0].data.push(axix);
      }

      return arr;
    };

    this.setState({
      worldWideCases: workedAPIDATA("cases"),
      worldWideDeaths: workedAPIDATA("deaths"),
      worldWideRecovered: workedAPIDATA("recovered")
    });
  };

  render() {
    const { worldWideCases, worldWideDeaths, worldWideRecovered } = this.state;
    return <div className="worldwide"></div>;
  }
}

export default Growth;
