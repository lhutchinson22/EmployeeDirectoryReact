import React from "react";

function RandomEmployee(props, index) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th key={index} scope="row">
            1
          </th>
          <td key={index}>{props.name}</td>
          <td key={index}>{props.name}</td>
          <td key={index}>{props.name}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RandomEmployee;
