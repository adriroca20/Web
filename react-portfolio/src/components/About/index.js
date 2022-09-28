import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faCode} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const About = ()=>{

    const [letterClass, setLetterClass] = useState("text-animate");


    useEffect(()=>{
        setLetterClass("text-animate-hover")
    })
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ","m","e"]}
                    idx={15}>
                    </AnimatedLetters>
                </h1>
                <p>Veniam elit tempor est aute excepteur veniam non 
                    cupidatat reprehenderit occaecat ut magna.
                     Sint minim magna officia excepteur.
                      Id cupidatat magna in cupidatat ullamco nulla minim.</p>
                <p>Minim dolor et do dolor cillum ut officia amet id.</p>
                <p>Laboris velit dolore laborum ad aliquip nisi.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                     <FontAwesomeIcon icon={faCode} color="#DD0031" />
                    </div>
                    <div className="face2">
                     <FontAwesomeIcon icon={faGift} color="#DD0031" />
                    </div>
                    <div className="face3">
                     <FontAwesomeIcon icon={faCode} color="#DD0031" />
                    </div>
                    <div className="face4">
                     <FontAwesomeIcon icon={faGift} color="#DD0031" />
                    </div>
                    <div className="face5">
                     <FontAwesomeIcon icon={faCode} color="#DD0031" />
                    </div>
                    <div className="face6">
                     <FontAwesomeIcon icon={faCode} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default About;