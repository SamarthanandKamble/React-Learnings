import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { className: "heading", key: "1" },
        "I'm the heading One"
      ),
      React.createElement(
        "h2",
        { className: "heading", key: "2" },
        "I'm the heading Two"
      ),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);
