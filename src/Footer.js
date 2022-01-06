import React from "react"
import twitter from "./images/twitter.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import github from "./images/github.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/jasminesabio_">
                <img src={twitter} className="twitter" />
            </a>

            <a href="https://www.linkedin.com/in/jasmine-sabio/">
                <img src={linkedin} />
            </a>

            <a href="https://www.instagram.com/jasminesabio/">
                <img src={instagram} />
            </a>

            <a href="https://github.com/jasminesabio">
                <img src={github} className="github" />
            </a>
            
            
            
            
        </footer>
    )
}