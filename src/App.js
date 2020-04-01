import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import pkg from "../package.json";
import webAppdata from "./utils/webappdata.json";
import Header from "./components/Header";
import Search from "./components/search";
import Data from "./components/data";
import Nav from "./components/nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      check: false
    };
  }

  onSearch = country => {
    this.setState({ country });
  };

  afterSearch = () => {
    this.setState({ check: true });
  };

  render() {
    return (
      <React.Fragment>
        <Header title={pkg.appName} />
        <Nav />
        <Search
          country={this.state.country}
          placeHolder={webAppdata.placeHolder}
          onSearch={this.onSearch}
          afterSearch={this.afterSearch}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <Data check={this.state.check} apiData="" />}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Data check={this.state.check} apiData={this.state.country} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
