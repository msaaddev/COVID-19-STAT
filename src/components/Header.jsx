import React from "react";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ title }) => {
  return (
    <Link to="/" className="styl">
      <div className="head">
        <img src={icon} alt="COVID-19 ICON" />
        <h1 className="text">{title}</h1>
      </div>
    </Link>
  );
};

export default Header;
