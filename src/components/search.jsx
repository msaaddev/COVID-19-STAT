import React, { Component } from "react";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";

class Search extends Component {
  searchCountry = async value => {
    try {
      const response = await axios.get(
        `https://corona.lmao.ninja/countries/${value}`
      );
      this.props.onSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { placeHolder } = this.props;
    return (
      <div className="search-area">
        <input id="search" type="text" placeholder={placeHolder} />
        <Link to="/search">
          <button
            className="search-btn"
            onClick={() =>
              this.searchCountry(document.getElementById("search").value)
            }
          >
            Search
          </button>
        </Link>
      </div>
    );
  }
}

export default Search;
