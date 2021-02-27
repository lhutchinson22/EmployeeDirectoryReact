import React from "react";
import RandomEmployee from "./RandomEmployee";

const AllUser = (props) => {
  return (
    <div>
      {props.users.map((user, index) => (
        <RandomEmployee user={user} key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default AllUser;
