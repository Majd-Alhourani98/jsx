// 1) Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get the div with the id "root"
const rootElement = document.getElementById("root");

// 3) Tell React to take control of it
const root = ReactDOM.createRoot(rootElement);

// 4) Create a component
function App() {
  return <h1>Hello React</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
