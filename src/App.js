import React from "react";
import pkg from "../package.json";
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <Header title={pkg.name} />
  )
}

export default App;
