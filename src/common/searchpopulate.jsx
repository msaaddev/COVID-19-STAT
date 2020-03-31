import React, { Component } from "react";

class SearchPopulate extends Component {

  render() {
    const { data } = this.props;
    return (
      <tbody>
        <tr key="1">
          <td className="country">1</td>
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
              {data.casesPerOneMillion === null ? 0 : data.casesPerOneMillion}
            </td>
          }
          <td className="death_per_million">
            {data.deathsPerOneMillion === null ? 0 : data.deathsPerOneMillion}
          </td>
        </tr>
      </tbody>
    );
  }
}

export default SearchPopulate;
