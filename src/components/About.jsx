import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <span>ABOUT ME</span>

        <h1>About Me</h1>

        <p>
          I am a passionate Full Stack Web Developer and computer
          science student who loves building modern and
          responsive web applications with beautiful UI.
        </p>

        <button>Download CV</button>
      </div>

      <div className="about-right">

        <div className="info-card">
          <h3>Name</h3>
          <p>Rani Arji</p>
        </div>

        <div className="info-card">
          <h3>Email</h3>
          <p>raniarji3@gmail.com</p>
        </div>

        <div className="info-card">
          <h3>Location</h3>
          <p>India</p>
        </div>

        <div className="info-card">
          <h3>Availability</h3>
          <p>Available for work</p>
        </div>

      </div>

    </section>
  );
}

export default About;