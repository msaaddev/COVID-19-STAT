import React from "react";
import icon from "../images/icon.png";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="head">
      <img src={icon} alt="COVID-19 ICON" />
      <h1 className="text">{title}</h1>
    </div>
  );
};

export default Header;
