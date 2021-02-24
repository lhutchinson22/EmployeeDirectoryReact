import React from "react";
import RandomEmployee from "./RandomEmployee";

const AllUser = (props) => {
  return (
    <div>
      {props.users.map((user, index) => (
        <RandomEmployee key={index} user={user} />
      ))}
    </div>
  );
};

export default AllUser;
