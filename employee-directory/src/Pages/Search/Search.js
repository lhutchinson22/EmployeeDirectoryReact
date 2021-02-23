import React, { Component } from "react";
import style from "../../App.css";
import axios from "axios";

export default class Search extends Component {
  state = { data: [], imgSearch: "" };

  onChange = function (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  getRequest = async function (e) {
    e.preventDefault();
    const BASEURL = "";

    // const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
    const fullUrl = BASEURL + this.state.imgSearch + "/images";
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
      <div style={style}>
        <h1>Search employee:</h1>
        <form>
          <p>employee name:</p>
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            name="imgSearch"
          />
          <input
            onClick={(e) => this.getRequest(e)}
            type="submit"
            value="Search"
          />
        </form>

        {/* {this.state.data.map((image, index) => (
          // <User key={index}>
          //   <img src={image} />
          // </User>
        ))} */}
      </div>
    );
  }
}
