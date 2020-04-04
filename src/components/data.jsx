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
    };
  }
  componentWillMount = async () => {
    try {
      const { data } = await axios.get(`https://corona.lmao.ninja/countries`);
      data.sort((a, b) => parseFloat(a.cases) - parseFloat(b.cases));
      data.reverse();
      this.setState({ apiData: data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { check, apiData } = this.props;
    const { apiData: stateData } = this.state;
    return (
      <div className="overflow">
        <table align="center">
          <TableHeader check={check} />
          {apiData === "" ? (
            <TableBody data="" check="false" apiData={stateData} />
          ) : (
            <TableBody check="true" data={apiData} />
          )}
        </table>
      </div>
    );
  }
}

export default Data;
