import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements">

      <span>ACHIEVEMENTS</span>

      <h1>My Achievements</h1>

      <div className="achievement-container">

        <div className="achievement-card">
          <h2>2⭐ CodeChef</h2>
          <p>Maximum Rating: 1519</p>
        </div>

        <div className="achievement-card">
          <h2>Frontend Internship</h2>
          <p>Intern at CodeAlpha</p>
        </div>

        <div className="achievement-card">
          <h2>Backend Internship</h2>
          <p>Intern at CodeAlpha</p>
        </div>

        <div className="achievement-card">
          <h2>Full Stack Development Internship</h2>
          <p>Intern at CodeAlpha</p>
        </div>

        <div className="achievement-card">
          <h2>Open Source</h2>
          <p>Active GitHub Contributor</p>
        </div>

        <div className="achievement-card">
          <h2>Pull Shark x2</h2>
          <p>GitHub Achievement</p>
        </div>

        <div className="achievement-card">
          <h2>YOLO</h2>
          <p>GitHub Achievement</p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;