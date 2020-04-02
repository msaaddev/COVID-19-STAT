import React, { Component } from "react";
import axios from "axios";
import "./growth.css";

class Growth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphID: { id: "WorldWide" },
      worldWideCases: {},
      worldWideDeaths: {},
      worldWideRecovered: {}
    };
  }

  componentDidMount = async () => {
    const { data: apiData } = await axios.get(
      `https://corona.lmao.ninja/v2/historical/all`
    );

    const workedAPIDATA = apiInfo => {
      let dateArr = Object.keys(apiData[apiInfo]);
      let obj = {};
      let dataXANDY = [];
      for (let i = 0; i < dateArr.length; i++) {
        let axix = {
          x: dateArr[i],
          y: apiData[apiInfo][dateArr[i]]
        };
        dataXANDY.push(axix);
      }

      obj = { ...this.state.graphID, data: [] };
      obj.data.push(dataXANDY);

      return obj;
    };
    this.setState({
      worldWideCases: workedAPIDATA("cases"),
      worldWideDeaths: workedAPIDATA("deaths"),
      worldWideRecovered: workedAPIDATA("recovered")
    });
    console.log(this.state.worldWideRecovered);
  };

  render() {
    return <div className="worldwide"></div>;
  }
}

export default Growth;
