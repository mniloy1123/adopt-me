import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //function component must return markup
  //that's what React.createElement generates
  return React.createElement(
    //creates one instance of some component or tag
    "div",
    //atributes we're pasing to the tag or component
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luis",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Pepper",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Doink",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
