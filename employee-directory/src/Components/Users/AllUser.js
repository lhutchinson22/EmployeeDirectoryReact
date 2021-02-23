import React from "react";
import RandomEmployee from "./RandomEmployee";

const AllUser = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <RandomEmployee user={user} />
      ))}
    </div>
  );
};

export default AllUser;
