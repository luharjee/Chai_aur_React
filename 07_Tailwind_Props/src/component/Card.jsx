import React from "react";

const Card = (props) => {
  console.log("props : ", props);

  return (
    <div>
      <h1>Rahul SAh : {props.username} </h1>
      <h1>Age : 22</h1>
      <h1>Place : Guwahati</h1>
    </div>
  );
};

export default Card;
