import React from "react";
import pkg from "../package.json";
import webAppdata from "./utils/webappdata.json";
import Header from "./components/Header";
import Search from "./components/search";
import Data from "./components/data";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header title={pkg.appName} />
      <Search placeHolder={webAppdata.placeHolder} />
      <Data />
    </React.Fragment>
  );
}

export default App;
