import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import pkg from "../package.json";
import webAppdata from "./utils/webappdata.json";
import Header from "./components/Header";
import Search from "./components/search";
import Data from "./components/data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: ""
    };
  }

  onSearch = country => {
    this.setState({ country });
    console.log(country);
  };

  render() {
    return (
      <React.Fragment>
        <Header title={pkg.appName} />
        <Search
          country={this.state.country}
          placeHolder={webAppdata.placeHolder}
          onSearch={this.onSearch}
        />
        <Switch>
          <Route exact path="/" render={() => <Data apiData="" />} />
        </Switch>
        {this.state.country === "" ? (
          <Data apiData="" />
        ) : (
          <Data apiData={this.state.country} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
