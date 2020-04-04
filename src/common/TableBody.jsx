import React, { Component } from "react";
import CountriesPopulate from "./countriespopulate";
import SearchPopulate from "./searchpopulate";

class TableBody extends Component {
  render() {
    const { data, apiData, check, ranks } = this.props;
    return check === "true" ? (
      <SearchPopulate data={data} ranks={ranks} />
    ) : (
      <CountriesPopulate apiInfo={apiData} />
    );
  }
}

export default TableBody;
