import "./Hero.css";
import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-badge">
          Full Stack Web Developer
        </span>

        <h1>
          Rani <span>Arji</span>
        </h1>

        <h2>Modern Web Developer</h2>

        <p>
          I am a passionate Full Stack Web Developer and Computer Science student who loves building modern, responsive, and user-friendly web applications. I enjoy creating clean UI designs, solving real-world problems, and continuously learning new technologies to improve my development skills.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary-btn">
              View My Work
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/raniarji3-cloud"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rani-arji-7787a037a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/raniarji"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-box">

          <img
            src={profile}
            alt="profile"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;