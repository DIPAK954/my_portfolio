import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="btns">
        <div className="btn"><a href="#home">Home</a></div>
        <div className="btn"><a href="#main_about">About</a></div>
        <div className="btn"><a href="#education">Education</a></div>
        <div className="btn"><a href="#main_skills">Skills</a></div>
        <div className="btn"><a href="#Projects">Projects</a></div>
      </div>
    </div>
  );
};

export default Header;
