import React, { Component } from "react";
import "./nav.css";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphID: { id: "WorldWide" },
      graphColor: { color: "hsl(355, 70%, 50%)" },
    };
  }
  searchCountry = async (value) => {
    try {
      const { data: searchResponseData } = await axios.get(
        `https://corona.lmao.ninja/v2/countries/${value}`
      );

      const { data } = await axios.get(
        `https://corona.lmao.ninja/v2/historical/${value}`
      );
      let id = { id: value };
      this.setState({ graphID: id });

      const { graphID, graphColor } = this.state;
      const { onSearch, afterSearch } = this.props;

      const formattingAPIDATA = (apiData, apiInfo) => {
        let dateArr = Object.keys(apiData[apiInfo]);

        let arr = [{ ...graphID, ...graphColor, data: [] }];
        let i;
        for (i = 0; i < dateArr.length; i += 7) {
          let axix = {
            x: dateArr[i],
            y: apiData[apiInfo][dateArr[i]],
          };

          arr[0].data.push(axix);
        }

        i -= 7;

        for (let j = i + 1; j < dateArr.length; j++) {
          let axix = {
            x: dateArr[j],
            y: apiData[apiInfo][dateArr[j]],
          };
          arr[0].data.push(axix);
        }
        return arr;
      };

      onSearch(
        searchResponseData,
        formattingAPIDATA(data.timeline, "cases"),
        formattingAPIDATA(data.timeline, "deaths"),
        formattingAPIDATA(data.timeline, "recovered")
      );
      afterSearch();
    } catch (error) {
      console.log(error);
    }
  };

  /*
    Rendering all countries when search box is empty
  */

  clearSearch = () => {
    const { onSearch } = this.props;
    let obj = "";
    onSearch(obj);
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
              onChange={(e) => {
                if (e.target.value !== "") this.searchCountry(e.target.value);
                else this.clearSearch();
              }}
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
