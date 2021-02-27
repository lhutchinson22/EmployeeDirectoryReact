import React, { Component } from "react";
import AllUser from "../../Components/Users/AllUser";
import API from "./../../utils/API/API";

export default class Home extends Component {
  state = {
    result: [],
    search: "",
    loading: true,
    filterCriteria: "all",
    query: "",
    currentSort: "default",
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

  handleClick = (e) => {
    this.setState({ filterCriteria: e.target.getAttribute("data-value") });
  };

  handleSortClick = (e) => {
    let nameSort = this.state.result;

    if (e.target.getAttribute("data-value") === "first-name") {
      nameSort = this.state.result.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        } else if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({ currentSort: e.target.getAttribute("data-value") });
    this.setState({ result: nameSort });
  };

  render() {
    if (this.state.loading) {
      return <div>Still loading...</div>;
    } else {
      const genderFilter =
        this.state.filterCriteria === "all"
          ? this.state.result
          : this.state.result.filter(
              (item) => item.gender === this.state.filterCriteria
            );

      const namesFilter =
        this.state.query === ""
          ? genderFilter
          : genderFilter.filter(
              (employee) =>
                this.state.query.toLowerCase() ==
                employee.name.last.toLowerCase()
            );

      return (
        <div className="show-employees">
          <h1 className="show-employees-header">Show Employees</h1>

          <input
            onChange={(e) => this.setState({ query: e.target.value })}
            type="text"
            name="nameSearch"
            className="input-bar"
          />
          <input type="submit" value="Search" />
          {/* sort by name */}
          <button
            data-value="first-name"
            onClick={this.handleSortClick}
            type="button"
            className="btn btn-primary"
          >
            sort by name
          </button>
          {/* filter by gender */}
          <button
            data-value="female"
            onClick={this.handleClick}
            type="button"
            className="btn btn-danger"
          >
            filter by gender
          </button>
          {/* reset filter */}
          <button
            data-value="all"
            onClick={this.handleClick}
            type="button"
            className="btn btn-warning"
          >
            reset filter
          </button>
          <AllUser users={namesFilter} />
        </div>
      );
    }
  }
}
