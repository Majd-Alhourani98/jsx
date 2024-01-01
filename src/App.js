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
    <div className="profile">
      <header className="profile-header">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-role">{role}</p>
      </header>

      <main className="profile-main">
        <section className="profile-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">{introduction}</p>

          <label className="form-label" htmlFor="name">
            Your Name
          </label>
          <input
            className="form-input"
            id="name"
            type="text"
            placeholder="Enter your name"
            autoFocus
          />

          <label className="form-label" htmlFor="introduction">
            Tell us about yourself
          </label>
          <textarea
            className="form-textarea"
            id="introduction"
            rows={textAreaRows}
            placeholder="Write a short introduction..."
            maxLength={24}
          />
        </section>

        <section className="profile-section">
          <h2 className="section-title">My Skills</h2>
          <p className="section-description">
            I am learning {skills.length} technologies.
          </p>

          <ul className="skills-list">
            <li className="skill-item">{skills[0]}</li>
            <li className="skill-item">{skills[1]}</li>
            <li className="skill-item">{skills[2]}</li>
            <li className="skill-item">{skills[3]}</li>
          </ul>
        </section>

        <section className="profile-section">
          <h2 className="section-title">Learning Progress</h2>
          <p className="section-description">
            Welcome to my learning journey in {new Date().getFullYear()}.
          </p>
          <p className="section-description">
            Next year will be {new Date().getFullYear() + 1}.
          </p>

          <label className="form-label" htmlFor="start-year">
            Starting Year
          </label>
          <input
            className="form-input"
            id="start-year"
            type={inputType}
            min={minYear}
            max={maxYear}
            defaultValue={minYear}
          />
        </section>

        <footer className="profile-footer">
          <p>{`Keep learning, ${name}!`}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
