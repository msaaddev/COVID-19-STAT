import React, { Component } from "react";
import "./tablebody.css";

class CountriesPopulate extends Component {
  /*
   * creating unique keys for mapping data
   */
  createKey = (apiInfo, data) => {
    if (apiInfo[0].country === "World") return apiInfo.indexOf(data);
    else return apiInfo.indexOf(data) + 1;
  };
  render() {
    const { apiInfo } = this.props;
    return (
      <tbody>
        {apiInfo.map((data) => {
          return (
            <tr key={this.createKey(apiInfo, data)}>
              <td className="country">
                {data.country !== "World" ? this.createKey(apiInfo, data) : "-"}
              </td>
              <td className="country">{data.country}</td>
              <td className="cases">{data.cases}</td>
              <td className="cases_today">{data.todayCases}</td>
              <td className="deaths">{data.deaths}</td>
              <td className="today_death">{data.todayDeaths}</td>
              <td className="recovered">{data.recovered}</td>
              <td className="active">{data.active}</td>
              <td className="critical">{data.critical}</td>
              {
                <td className="case_per_million">
                  {data.casesPerOneMillion === null
                    ? 0
                    : data.casesPerOneMillion}
                </td>
              }
              <td className="death_per_million">
                {data.deathsPerOneMillion === null
                  ? 0
                  : data.deathsPerOneMillion}
              </td>
              <td className="active">-</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default CountriesPopulate;
