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
    this.setState({ currentSort: e.target.getAttribute("data-value") });
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

      // const nameSort =
      //   this.state.currentSort === "default"
      //     ? nameSort
      //     : nameSort.sort((a, b) => {
      //         if (a[nameSort] < b[nameSort]) {
      //           return -1;
      //         }
      //         if (a[nameSort] > b[nameSort]) {
      //           return 1;
      //         }
      //         return 0;
      //       });

      return (
        <div className="show-employees">
          <h1 className="show-employees-header">Show Employees</h1>

          <input
            onChange={(e) => this.setState({ query: e.target.value })}
            type="text"
            name="nameSearch"
          />
          <input type="submit" value="Search" />
          {/* sort by name */}
          <button
            data-value="first-name"
            onClick={this.handleClick}
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
