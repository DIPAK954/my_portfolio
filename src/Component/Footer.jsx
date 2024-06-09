import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer =()=>{
    return <div className="footer">
        <hr></hr>
        <center>
        <a href="https://www.linkedin.com/in/dipak-dhrangi/" target="_blank"> <FaLinkedin /></a>
        <a href="mailto:dipakdhrangiwork95@gmail.com" target="_blank"> <IoIosMail/></a>
        <a href="https://github.com/DIPAK954" target="_blank"> <FaGithub /></a>
        </center>
    </div>
    
}

export default Footer;