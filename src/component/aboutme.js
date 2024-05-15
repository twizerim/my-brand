
import React from "react";
import "../sass/style.css"
import jant from "../assets/jant.jpeg"


export default function Aboutme(){
    return (
        <div class="about-container" id="about">
        <h1 class="heading-title">About me</h1>
      <div class="about">
          <div class="about-text">
        <p>Hi my name is Twizerimana Gedeon I'am a full-stack software Developer.I can make a UI/UX Design, Front-End and Back-End</p>
        <p>we follow us</p> 
        <div class="button-container text-left">
        <a href="" class="btn btn-none" download="">Download my cv</a>
      </div>
      </div>
      <div class= "about-image">
          <img src={jant} class="image-bg"/>
      </div>
      </div>
      </div>
    )
}