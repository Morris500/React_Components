import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading";

ReactDOM.render(
  <div>
    <Heading />
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
