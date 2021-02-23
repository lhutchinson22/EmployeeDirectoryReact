import React, { Component } from "react";
import AllUser from "../../Components/Users/AllUser";
import API from "./../../utils/API/API";

export default class Home extends Component {
  state = {
    result: [],
    search: "",
    loading: true,
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data, loading: false }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.loading) {
      return <div>Still loading...</div>;
    } else {
      console.log(this.state.result.results);

      return (
        <div>
          <h1>Show Employees</h1>
          <AllUser users={this.state.result.results} />
        </div>
      );
    }
  }
}
