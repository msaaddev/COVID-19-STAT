import React from "react";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="head">
      <h1 className="text">{title}</h1>
    </div>
  );
};

export default Header;
