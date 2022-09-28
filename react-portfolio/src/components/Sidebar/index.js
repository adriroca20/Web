import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faHome, faUser , faEnvelope,faLink } from "@fortawesome/free-solid-svg-icons"

const Sidebar =()=>(
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"></img> 
            <img className="sub-logo" src={LogoSubtitle} alt="logo"></img> 
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="#">
                    <FontAwesomeIcon icon={faLink} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="#">
                    <FontAwesomeIcon icon={faLink} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="#">
                    <FontAwesomeIcon icon={faLink} color="#4d4d4e"/>
                </a>

            </li>
        </ul>
    </div>
)


export default Sidebar;