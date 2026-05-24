import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { FaJava, FaDatabase } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <span>MY SKILLS</span>

      <h1>Technologies I Work With</h1>

      <div className="skills-container">

        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <h2>HTML</h2>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <h2>CSS</h2>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon" />
          <h2>JavaScript</h2>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h2>React</h2>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <h2>Node.js</h2>
        </div>

        <div className="skill-card">
          <FaPython className="skill-icon" />
          <h2>Python</h2>
        </div>
        
        <div className="skill-card">
            <FaJava className="skill-icon" />
            <h2>Java</h2>
        </div>

        <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h2>SQL</h2>
        </div>

      </div>

    </section>
  );
}

export default Skills;