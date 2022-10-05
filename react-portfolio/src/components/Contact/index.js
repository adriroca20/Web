import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useState,useEffect } from "react";
import Loader from "react-loaders";
import { MapContainer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";

const Contact = () =>{
    const letrasContacto=["C","o","n","t","a","c","t","o"];
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(()=>{
        setLetterClass("text-animate-hover")
    })

    return(
        <>
        <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={letrasContacto} 
                                        idx={15} 
                                        letterClass={letterClass}>
                        </AnimatedLetters>
                    </h1>
                    <p>
                        Aliquip ad elit commodo non 
                        in aliqua elit quis proident elit. Reprehenderit magna ex mollit 
                        eu laborum exercitation labore labore proident adipisicing 
                        enim laboris sit. Do duis dolore exercitation ea duis amet fugiat occaecat ad 
                        sit. Minim magna dolor fugiat nisi. Adipisicing 
                    </p>
                    <div className="contact-form">
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required></input>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input  type="submit" className="flat-button" value="SEND" required></input>
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
                <div className="info-map">
                    Valencia,
                    <br></br>
                    UPV
                    <br></br>
                    Direccion Inventada 20, 56088
                    <br></br>
                    <span>adrian@gmail.com</span>
                </div>
                <div className="map-wrap">
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
                </div>
        </div>
        <Loader type="pacman"></Loader>
        </>
    );
}

export default Contact;