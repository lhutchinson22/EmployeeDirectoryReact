import React, { useState } from "react";

function RandomEmployee(props) {
  // const employees = Object.keys(props.user);
  // const [sortedField, setSortedField] = useState(null);
  // const [sortAscending, setSortAscending] = useState();
  // const requestSort = () => {};

  // let sortedEmployees = [...employees];
  // if (sortedField !== null) {
  //   sortedEmployees.sort((a, b) => {
  //     if (a[sortedField] < b[sortedField]) {
  //       return -1;
  //     }
  //     if (a[sortedField] > b[sortedField]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  return (
    <table
      className="table"
      data-search="true"
      data-show-columns="true"
      data-show-multi-sort="true"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Cell</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.index}</th>
          <td>{props.user.name.first}</td>
          <td>{props.user.name.last}</td>
          <td>{props.user.email}</td>
          <td>{props.user.cell}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RandomEmployee;
