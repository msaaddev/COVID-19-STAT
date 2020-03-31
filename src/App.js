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
      country: "",
      check: false
    };
  }

  onSearch = country => {
    this.setState({ country });
  };

  afterSearch = () => {
    this.setState({ check: true });
    console.log(this.state.check);
  };

  render() {
    return (
      <React.Fragment>
        <Header title={pkg.appName} />
        <Search
          country={this.state.country}
          placeHolder={webAppdata.placeHolder}
          onSearch={this.onSearch}
          afterSearch={this.afterSearch}
        />

        {this.state.country === "" ? (
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Data check={this.state.check} apiData="" state={this.state} />
              )}
            />
          </Switch>
        ) : (
          <Data
            check={this.state.check}
            apiData={this.state.country}
            state={this.state}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
