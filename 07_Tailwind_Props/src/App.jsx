import React from "react";
import Card from "./component/Card";

const App = () => {
  let myObj = {
    username: "Rahul",
    age: 21,
  };

  let newArr = [1, 2, 3, 4];

  return (
    <div>
      <Card username="chai-aur-code" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
