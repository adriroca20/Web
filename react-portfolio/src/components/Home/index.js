import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect } from "react";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {

    //El primer parametro es el estado actual y el setLetterClass es el estado
    //al que queremos que pase
    //Con el useState le damos valor al primer parametro (letterClass)
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["l","t","u","o","l","u"]
    const jobArray = ["l","t","u", " ","o","l","u","o"]

    useEffect(()=>{
        return ()=>{setLetterClass("text-animate-hover")}
    })
    

    return (
        <>
            <Loader type="pacman"></Loader>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`}>i,</span> 
                    <br/>
                    <span className={`${letterClass} _13`}>I'</span> 
                    <span className={`${letterClass} _14`}>m</span> 
                    <img src={LogoTitle} alt="developer"></img>
                    <AnimatedLetters letterClass={letterClass} 
                                    strArray={nameArray}
                                    idx={15}
                                    >

                    </AnimatedLetters>
                    <br></br>
                    <AnimatedLetters letterClass={letterClass} 
                                    strArray={jobArray}
                                    idx={21}
                                    />
                    </h1>
                   <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
                   <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo></Logo>
            </div>
        </>
    )       
};

export default Home;