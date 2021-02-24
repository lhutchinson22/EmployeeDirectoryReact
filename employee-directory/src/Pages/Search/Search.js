import React, { Component } from "react";
// import style from "../../App.css";
import axios from "axios";
import RandomEmployee from "../../Components/Users/RandomEmployee";
import AllUser from "../../Components/Users/AllUser";
import API from "./../../utils/API/API";

export default class Search extends Component {
  state = { data: [], nationalitySearch: "" };

  onChange = function (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  getRequest = async function (e) {
    e.preventDefault();
    const BASEURL = "https://randomuser.me/api/?nat=";
    const fullUrl = BASEURL + this.state.nationalitySearch;

    try {
      const response = await axios.get(fullUrl);
      console.log(response);

      this.setState({ data: response.data.message });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="show-employees">
        <h1 className="show-employees-header">
          Search employee by nationality:
        </h1>
        <form>
          <p>employee nationality:</p>
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            name="nationalitySearch"
          />
          <input
            onClick={(e) => this.getRequest(e)}
            type="submit"
            value="Search"
          />
        </form>
        <div className="show-employees">
          <div className="search-div">
            {this.state.data.map((item, index) => (
              <AllUser key={index}>
                <p>{item}</p>
              </AllUser>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
