
import React from "react";
import "../sass/style.css"
import gedeon from "../assets/gedeon.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Homescreen(){
    return (
        <div class="home-container" id="home">
        <div class="home">
          <div class="links-media-fixed">
            <a href="https://www.facebook.com/tgjant.gedeon"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/></a>
            <a href="https://github.com/twizerim"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/></a>
            
          </div>
            <div class="positoining">
            <div class="welcome-text">
                <h5><span class="salutation">Hi my name is </span><span class="name">Twizerimana gedeon</span></h5>
                <p>I'am a full-stack software Developer.I can make a UI/UX Design, Front-End and Back-End</p>
                <div class="button-container">
                    <a href="" class="btn btn-none">Let's work together!</a>
                </div>
            </div>
        </div>
            <div class="image-container">
            <img src={gedeon} alt="Logo" />
            </div>
            <div class="email-link-fixed">
              <p>gedeontwizeyimana@gmail.com</p>
            </div>
        </div>
    </div>
    )
}