import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
