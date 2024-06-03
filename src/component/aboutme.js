
import React from "react";
import "../sass/style.css"
import jant from "../assets/jant.jpeg"


export default function Aboutme(){
    return (
        <div class="about-container" id="about">
        <h1 class="heading-title">About me</h1>
      <div class="about">
        <div class="about-text">
        <p>Hi my name is Twizerimana Gedeon and I like making things for the internet. My interest in web development began when I enrolled
           in college in 2223, and from  there I began my journey to improve my coding abilities. 
        </p>
        <p>Here are some current tochnologies I've worked with</p> 
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