import React, { Component } from "react";
import axios from "axios";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }

  componentWillMount = async () => {
    try {
      const response = await axios.get(`https://corona.lmao.ninja/countries`);
      this.setState({ apiData: response.data });
      console.log(this.state.apiData);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <p>Hello</p>;
  }
}

export default Stats;
