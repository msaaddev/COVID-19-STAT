import React from "react";
import webAppdata from "../utils/webappdata.json";
import "./tablehead.css";

const TableHeader = () => {
  let check;
  const location = window.location.pathname;
  location === "/" ? (check = false) : (check = true);

  return (
    <thead>
      <tr>
        <th className="country">No.</th>
        <th className="country">{webAppdata.Country}</th>
        <th className="cases">{webAppdata.Cases}</th>
        <th className="cases_today">{webAppdata.Cases_Today}</th>
        <th className="deaths">{webAppdata.Deaths}</th>
        <th className="today_death">{webAppdata.Today_Deaths}</th>
        <th className="recovered">{webAppdata.Recovered}</th>
        <th className="active">{webAppdata.Active}</th>
        <th className="critical">{webAppdata.Critical}</th>
        <th className="case_per_million">{webAppdata.Cases_Per_Million}</th>
        <th className="death_per_million">{webAppdata.Deaths_Per_Million}</th>
        <th className="active">{webAppdata.Growth}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
