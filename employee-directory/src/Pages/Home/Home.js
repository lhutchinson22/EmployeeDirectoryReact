import React, { Component } from "react";
import RandomEmployee from "../../Components/Users/RandomEmployee";
import User from "../../Components/Users/User";
import API from "./../../utils/API/API";

export default class Home extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Show</h1>
        <RandomEmployee />
      </div>
    );
  }
}
