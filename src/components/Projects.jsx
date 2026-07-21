import "./Projects.css";
import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.jpeg";
import project4 from "../assets/projects/project4.jpeg";
import project5 from "../assets/projects/project5.jpeg";
import project6 from "../assets/projects/project6.jpeg";

function Projects() {
  return (
    <section className="projects" id="projects">

      <span>MY PROJECTS</span>

      <h1>Featured Projects</h1>

      <div className="projects-container">

        <div className="project-card">
          <img src={project1} alt="project1" />
          <h2>Student Management System</h2>
          <p>Modern management system with authentication.</p>
        </div>

        <div className="project-card">
          <img src={project2} alt="project2" />
          <h2>Smart Campus Management System</h2>
          <p>AI based smart campus management platform.</p>
        </div>

        <div className="project-card">
          <img src={project3} alt="project3" />
          <h2>Image Gallery</h2>
          <p>Responsive image gallery with animations.</p>
        </div>
        <div className="project-card">
          <img src={project4} alt="project4" />
          <h2>E-commerce store</h2>
          <p>AI based responsive e-commerce platform with payment integration.</p>
        </div>
        <div className="project-card">
          <img src={project5} alt="project5" />
          <h2>Project-Management System</h2>
          <p>Responsive project management platform with task tracking.</p>
        </div>
        <div className="project-card">
          <img src={project6} alt="project6" />
          <h2>Restaurant-Management System</h2>
          <p>Responsive restaurant management platform with order tracking.</p>
        </div>
      </div>

    </section>
  );
}

export default Projects;