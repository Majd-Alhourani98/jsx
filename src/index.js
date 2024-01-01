import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
  const string = "Hello React";
  const number = 42;
  const booleanTrue = true;
  const booleanFalse = false;
  const nullValue = null;
  const undefinedValue = undefined;
  const array = [1, 2, 3];
  const object = { name: "React" };

  return (
    <div>
      {/* STRING — RENDERABLE */}
      <p>{string}</p>

      {/* NUMBER — RENDERABLE */}
      <p>{number}</p>

      {/* BOOLEAN — NOT RENDERABLE */}
      <p>{booleanTrue}</p>
      <p>{booleanFalse}</p>

      {/* NULL — NOT RENDERABLE */}
      <p>{nullValue}</p>

      {/* UNDEFINED — NOT RENDERABLE */}
      <p>{undefinedValue}</p>

      {/* ARRAY — RENDERABLE */}
      <p>{array}</p>

      {/* OBJECT — NOT RENDERABLE - produce error*/}
      {/* <p>{object}</p> */}

      {/* OBJECT PROPERTY — RENDERABLE */}
      <p>{object.name}</p>

      {/* EXPRESSION — RENDERABLE */}
      <p>{2 + 1}</p>

      {/* CUSTOMIZING ELEMENTS WITH PROPS */}

      <input
        type="number"
        min={5}
        max={20}
        style={{ border: "3px solid red", padding: "12px" }}
      />

      <textarea autoFocus spellCheck maxLength={5} className="input" />
    </div>
  );
}

root.render(<App />);
