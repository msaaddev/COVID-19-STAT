import React, { Component } from "react";
import "./tablebody.css";
import CountriesPopulate from "./countriespopulate";
import SearchPopulate from "./searchpopulate";

class TableBody extends Component {
  render() {
    const { data, apiData, check } = this.props;

    return check === "true" ? (
      <SearchPopulate data={data} />
    ) : (
      <CountriesPopulate apiInfo={apiData} />
    );
  }
}

export default TableBody;
