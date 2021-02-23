import React from "react";

function RandomEmployee(props) {
  console.log(props + ".. hi this is props passed");
  return (
    // <table
    //   className="table"
    //   data-search="true"
    //   data-show-columns="true"
    //   data-show-multi-sort="true"
    // >
    //   <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">First</th>
    //       <th scope="col">Last</th>
    //       <th scope="col">Email</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th key={index} scope="row">
    //         1
    //       </th>
    //       <td key={index}>{props.name}</td>
    //       <td key={index}>{props.name}</td>
    //       <td key={index}>{props.name}</td>
    //     </tr>
    //   </tbody>
    // </table>
    <div>
      <p>{props.user.name.title}</p>
    </div>
  );
}

export default RandomEmployee;
