import React, { Component } from "react";
import "./tablebody.css";

class TableBody extends Component {
  createKey = (apiData, data) => {
    return apiData.indexOf(data);
  };
  render() {
    const { apiData } = this.props;
    return (
      <tbody>
        {apiData.map(data => {
          return (
            <tr key={this.createKey(apiData, data)}>
              <td className="country">{this.createKey(apiData, data) + 1}</td>
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
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
