import React, { Component } from "react";
import AllUser from "../../Components/Users/AllUser";
import API from "./../../utils/API/API";

export default class Home extends Component {
  state = {
    result: [],
    search: "",
    loading: true,
    filterCriteria: "all",
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) =>
        this.setState({ result: res.data.results, loading: false })
      )
      .catch((err) => console.log(err));
  };

  handleClick = () => {
    console.log("Click happened");
    this.setState({ filterCriteria: "female" });
  };

  render() {
    if (this.state.loading) {
      return <div>Still loading...</div>;
    } else {
      const results =
        this.state.filterCriteria === "all"
          ? this.state.result
          : this.state.result.filter(
              (item) => item.gender === this.state.filterCriteria
            );
      return (
        <div className="show-employees">
          <h1 className="show-employees-header">Show Employees</h1>
          <button
            onClick={this.handleClick}
            type="button"
            class="btn btn-danger"
          >
            Filter Gender Women
          </button>
          <AllUser users={results} />
        </div>
      );
    }
  }
}
