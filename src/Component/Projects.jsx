import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="Projects" id="id_projects">
      <p id="Projects">Projects</p>
      <div className="Projects_main">
        <div className="projects_inner">
          <p className="projects_name">
            Weather App
            <br></br>
            <a href="https://github.com/DIPAK954/PRODIGY_WD_05" target="_blank">
              <FaGithub />
            </a>
          </p>
        </div>
        <div className="projects_inner">
          <p className="projects_name">
            E-commerce App
            <br></br>
            <a href="https://github.com/DIPAK954/E-commerce" target="_blank">
              <FaGithub></FaGithub>
            </a>
          </p>
        </div>
        <div className="projects_inner">
          <p className="projects_name">
            Portfolio
            <br></br>
            <a href="https://github.com/DIPAK954/my_portfolio" target="_blank">
              <FaGithub></FaGithub>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
