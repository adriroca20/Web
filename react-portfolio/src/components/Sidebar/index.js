import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
<<<<<<< HEAD
import { faHome, faUser , faEnvelope } from "@fortawesome/free-solid-svg-icons"
=======
import { faHome, faUser,faLink } from "@fortawesome/free-solid-svg-icons"
>>>>>>> 8212d8aff7fd31a2635c87aa7a4cf3ff38df1570


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
<<<<<<< HEAD
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
=======
            <NavLink exact="true" activeclassname="active" to="/">
>>>>>>> 8212d8aff7fd31a2635c87aa7a4cf3ff38df1570
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
<<<<<<< HEAD
                
=======
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
>>>>>>> 8212d8aff7fd31a2635c87aa7a4cf3ff38df1570
            </li>
        </ul>
    </div>
)


export default Sidebar;