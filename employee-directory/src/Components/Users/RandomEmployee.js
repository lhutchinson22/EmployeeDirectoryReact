import React from "react";

function RandomEmployee(props) {
  return (
    <div className="text-center">
      <img
        alt={props.name}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
    </div>
  );
}

export default RandomEmployee;
