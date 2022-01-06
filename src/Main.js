import React from "react"
import email from "./images/email.png"

export default function Main() {
    return (
        <main>
        
        <div>
            <h2>Jasmine Sabio</h2>
            <h4>Blockchain Developer</h4>
        </div>
        
        <div className="contact">
            <a href="mailto:jasmine.sabio@gmail.com">
                <img src={email} className="email-image" /> 
            </a> 
            <p className="email-text">Email</p>
        </div>
        
        <div>
            <h3 className="about--title">About</h3>
            <p className="about--info">I am a blockchain developer with an interest in front end development of Web3 dApps. Focused on helping make Web3 applications user friendly and accesible!</p>
        </div>
        
        <div>
            <h3 className="interests--title">Interests</h3>
            <p className="interests--info">House music. Late night b2b's. Scuba diving. Sci-fi books/tv shows/movies. Yoga. Nanotechnology.</p>
        </div>
        
        </main>
    )
}