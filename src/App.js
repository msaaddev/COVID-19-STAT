import React from "react";
import pkg from "../package.json";
import webAppdata from "./utils/webappdata.json";
import Header from "./components/Header";
import Search from "./components/search";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header title={pkg.name} />
      <Search placeHolder={webAppdata.placeHolder} />
    </React.Fragment>
  );
}

export default App;
