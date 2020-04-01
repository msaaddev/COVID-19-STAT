import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="statsContainer">
          <Link to="/">
            <button className="stats">STATS</button>
          </Link>
        </div>
        <div className="growthContainer">
          <Link to="growth">
            <button className="growth">GROWTH</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
