import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Rani.</h1>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <button className="resume-btn">Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;