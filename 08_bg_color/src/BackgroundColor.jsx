import React from "react";
import { useState } from "react";

const BackgroundColor = () => {
  const [color, setColor] = useState("white");

  //   const handleChangeRed = () => {
  //     document.querySelector("body").style.backgroundColor = "red";
  //   };

  //   const handlChangeBlue = () => {
  //     document.querySelector("body").style.backgroundColor = "blue";
  //   };

  //   const handleChangeGreen = () => {
  //     document.querySelector("body").style.backgroundColor = "green";
  //   };

  //   const handleChangeOlive = () => {
  //     document.querySelector("body").style.backgroundColor = "olive";
  //   };

  //   const handleChangeGrey = () => {
  //     document.querySelector("body").style.backgroundColor = "grey";
  //   };

  //   const handleChangeYellow = () => {
  //     document.querySelector("body").style.backgroundColor = "yellow";
  //   };

  //   const handleChangePurple = () => {
  //     document.querySelector("body").style.backgroundColor = "purple";
  //   };

  //   const handleChangeLavender = () => {
  //     document.querySelector("body").style.backgroundColor = "lavender";
  //   };

  //   const hanldeChangeWhite = () => {
  //     document.querySelector("body").style.backgroundColor = "white";
  //   };

  //   const handleChangeBlack = () => {
  //     document.querySelector("body").style.backgroundColor = "black";
  //   };

  return (
    <div className="bg-color">
      <div className="color" style={{ backgroundColor: color }}>
        Rahul
      </div>

      <button
        onClick={() => {
          setColor("orange");
        }}
      >
        Change
      </button>
      <div>
        <button
          onClick={() => {
            console.log("Rahul Bhaiya");
            setColor("red");
            console.log(color);
            document.querySelector("body").style.backgroundColor = color;
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("blue");
            console.log(color);
            document.querySelector("body").style.backgroundColor = color;
          }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("green");
            console.log(color);
            document.querySelector("body").style.backgroundColor = color;
          }}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default BackgroundColor;
