import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

function App() {
  const name = "Majd Alhourani";
  const role = "Junior Web Developer";
  const introduction =
    "I am learning React and improving my web development skills.";
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const inputType = "number";
  const minYear = 2020;
  const maxYear = new Date().getFullYear();
  const textAreaRows = 4;

  return (
    <div>
      <header>
        <h1>{name}</h1>
        <p>{role}</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>{introduction}</p>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            autoFocus
          />

          <label htmlFor="introduction">Tell us about yourself</label>
          <textarea
            id="introduction"
            rows={textAreaRows}
            placeholder="Write a short introduction..."
            maxLength={24}
          />
        </section>

        <section>
          <h2>My Skills</h2>
          <p>I am learning {skills.length} technologies.</p>

          <ul>
            <li>{skills[0]}</li>
            <li>{skills[1]}</li>
            <li>{skills[2]}</li>
            <li>{skills[3]}</li>
          </ul>
        </section>

        <section>
          <h2>Learning Progress</h2>
          <p>Welcome to my learning journey in {new Date().getFullYear()}</p>
          <p>Next year will be {new Date().getFullYear() + 1}</p>
          <label htmlFor="start-year">Starting Year</label>
          <input
            id="start-year"
            type={inputType}
            min={minYear}
            max={maxYear}
            defaultValue={minYear}
          />
        </section>

        <footer>
          <p>{`Keep learning, ${name}`}</p>
        </footer>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
