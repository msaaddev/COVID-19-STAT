import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import pkg from "../package.json";
import webAppdata from "./utils/webappdata.json";
import Header from "./components/Header";
import Data from "./components/data";
import Nav from "./components/nav";
import Growth from "./components/growth";
import IndividualGrowth from "./components/individualcountrygrowth";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      countryCases: [],
      countryDeaths: [],
      countryRecovered: [],
      check: false
    };
  }

  onSearch = (country, countryCases, countryDeaths, countryRecovered) => {
    this.setState({ country, countryCases, countryDeaths, countryRecovered });
  };

  afterSearch = () => {
    this.setState({ check: true });
  };

  render() {
    return (
      <React.Fragment>
        <Header title={pkg.appName} />
        <Nav
          country={this.state.country}
          placeHolder={webAppdata.placeHolder}
          onSearch={this.onSearch}
          afterSearch={this.afterSearch}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Data
                check={this.state.check}
                apiData=""
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Data
                check={this.state.check}
                apiData={this.state.country}
              />
            )}
          />
          <Route
            exact
            path="/COVID-19-country-graphs"
            render={() => (
              <IndividualGrowth
                cases={this.state.countryCases}
                deaths={this.state.countryDeaths}
                recovered={this.state.countryRecovered}
                name={this.state.country.country}
              />
            )}
          />
          <Route exact path="/growth" component={Growth} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
