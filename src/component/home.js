
import React from "react";
import "../sass/style.css"
import gedeon from "../assets/gedeon.jpeg"


export default function Homescreen(){
    return (
        <div class="home-container" id="home">
        <div class="home">
          <div class="links-media-fixed">
            <i class="fa-brands fa-github git"></i>
            <i class="fa-brands fa-instagram git"></i>
            <i class="fa-brands fa-twitter git" ></i>
            <i class="fa-brands fa-linkedin-in git"></i>
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