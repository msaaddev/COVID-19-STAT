import React, { Component } from "react";
import axios from "axios";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/TableBody";
import "./table.css";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ranks: {},
    };
  }
  componentWillMount = async () => {
    try {
      const { data } = await axios.get(`https://corona.lmao.ninja/countries`);
      data.sort((a, b) => parseFloat(a.cases) - parseFloat(b.cases));
      data.reverse();

      let obj = {};
      for (let i = 0; i < data.length; i++) {
        let temp = {
          [data[i].country]: i + 1,
        };
        obj = { ...obj, ...temp };
      }
      this.setState({ apiData: data, ranks: obj });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { check, apiData } = this.props;
    const { apiData: stateData, ranks } = this.state;
    return (
      <div className="overflow">
        <table align="center">
          <TableHeader check={check} />
          {apiData === "" ? (
            <TableBody
              data=""
              check="false"
              ranks={ranks}
              apiData={stateData}
            />
          ) : (
            <TableBody check="true" ranks={ranks} data={apiData} />
          )}
        </table>
      </div>
    );
  }
}

export default Data;
