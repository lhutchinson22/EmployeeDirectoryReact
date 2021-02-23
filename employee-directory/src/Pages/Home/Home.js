import React, { Component } from "react";
import RandomEmployee from "../../Components/Users/RandomEmployee";
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
    // console.log(this.state.result.results);

    // console.log(Object.keys(test));

    return (
      <div>
        <h1>Show Employees</h1>
        <RandomEmployee src={this.state.result.results} />
      </div>
    );
  }
}
