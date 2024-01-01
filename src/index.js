// 1) Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get the div with the id "root"
const rootElement = document.getElementById("root");

// 3) Tell React to take control of it
const root = ReactDOM.createRoot(rootElement);

// 4) Create a component
function App() {
  let message = "By there!";

  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  return <h1>{message.toUpperCase()}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
