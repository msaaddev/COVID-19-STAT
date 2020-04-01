import React, { Component } from "react";
import "./nav.css";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  searchCountry = async value => {
    try {
      const response = await axios.get(
        `https://corona.lmao.ninja/countries/${value}`
      );
      this.props.onSearch(response.data);
      this.props.afterSearch();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { placeHolder } = this.props;

    return (
      <div className="nav">
        <div className="statsContainer">
          <Link to="/">
            <button className="stats">STATS</button>
          </Link>
        </div>
        <div className="search-area">
          <Link to="/search" className="textSearch">
            <input
              id="search"
              type="text"
              placeholder={placeHolder}
              onChange={e => this.searchCountry(e.target.value)}
            />
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
