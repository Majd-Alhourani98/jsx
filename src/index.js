import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

function App() {
  return (
    <div>
      <header>
        <h1>Majd Alhourani</h1>
        <p>Junior Web Developer</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>I am learning React and improving my web development skills.</p>
        </section>

        <section>
          <h2>My Skills</h2>
          <p>I am learning 4 technologies.</p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>

        <section>
          <h2>Learning Progress</h2>
          <p>Welcome to my learning journey in 2024</p>
          <p>Next year will be 2025.</p>
        </section>

        <footer>
          <p>Keep learning and Majd!</p>
        </footer>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
