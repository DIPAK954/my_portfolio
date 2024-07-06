import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Projects = () => {
  return (
    <div className="Projects" id="id_projects">
      <p id="Projects">Projects</p>
      <div className="Projects_main">
        <div className="projects_inner">
          <p className="projects_name">
            Rocket chat
            <br></br>
            <a href="https://github.com/DIPAK954/Rocket-Chat" target="_blank">
              <FaGithub />
            </a>
            <a href="https://rocket-chat-one.vercel.app/" target="_blank"><IoIosLink /></a>
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
            <a href="https://my-portfolio-dipak.vercel.app/" target="_blank"><IoIosLink /></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
