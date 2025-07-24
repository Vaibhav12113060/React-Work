import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// By default format for react
// If we try to inject our own format of element then it will give error for example in customReact project if
//  we try to inject reactElement into the container then it will give error

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", targer: "_blank" },
  "click me to visit page"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>

  //anotherElement
  // reactElement
);
