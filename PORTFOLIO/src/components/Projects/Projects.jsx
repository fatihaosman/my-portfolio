import "./Projects.css";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


import project1 from "../../assets/project1.png";
import project2 from "../../assets/ipad Pro3.png";
import project3 from "../../assets/project31.png";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">
        <h2>Featured Projects</h2>

        <p>
          A collection of digital products designed to solve
          real user problems through thoughtful design and development.
        </p>
      </div>

      <div className="projects-container">

        <div className="project-card unimart-card">
          <img src={project1} alt="UniMart" className="project-image" />

          <h3 className="unimart-header">UniMart</h3>

          <p className="project-description">
            A student marketplace platform for buying and selling products.
          </p>

          <div className="tools unimart-tools">
            <span>React</span>
            <span>Django</span>
            <span>PostgreSQL</span>
          </div>

          <Link className="view-case unimart-case" to="/unimart">
            View Case
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="project-card eger-card">
          <img src={project2} alt="EgerConnect" />

          <h3 className="eger-header">EgerConnect</h3>

          <p className="project-description">
            Student communication and engagement platform.
          </p>

          <div className="tools eger-tools">
            <span>React</span>
            <span>Django</span>
            <span>REST API</span>
          </div>

          <Link className="view-case eger-case" to="/egerconnect" >
            View Case
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="project-card ic-card">
          <img src={project3} alt="IC-Project" />

          <h3 className="ic-header">IC-Project</h3>

          <p className="project-description">
            A modern nature-focused tourism experience.
          </p>

          <div className="tools ic-tools" >
            <span>Figma</span>
            <span>UX Research</span>
            <span>UI Design</span>
          </div>

          <Link className="view-case ic-case"   to="/ic-project">
            View Case
            <FiArrowUpRight />
          </Link>
        </div>

        

      </div>

    </section>
  );
}

export default Projects;