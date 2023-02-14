import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let curDate = new Date();
curDate = curDate.getHours();
let message = "";
const cssStyle = {};

if (curDate >= 1 && curDate <= 11) {
  message = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate <= 19) {
  message = "Good AfterNoon";
  cssStyle.color = "orange";
} else {
  message = "Good Night!";
  cssStyle.color = "black";
}

ReactDOM.render(
  <div>
    <h1>
      Hello <span style={cssStyle}> {message}</span>
    </h1>
  </div>,
  document.getElementById("root")
);
