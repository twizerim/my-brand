
import React from "react";
import "../sass/style.css"


export default function Skills(){
    return (
        <div class="portfolio-container" id="skills">
        <h1 class="heading-title">Skills</h1>
        <div class="card-container">
          <div class="card card-one">
            <i class="fa-solid fa-code"></i>
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis.</p>
              <a href="" class="link-portfolio">Learn more...</a>
          </div>
          <div class="card card-two">
            <i class="fa-solid fa-crop-simple" ></i>
            <h3>UI/UX Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis..</p>
            <a href="" class="link-portfolio"><p>Learn more...</p></a>
          </div>
          <div class="card card-three">
            <i class="fa-brands fa-app-store" ></i>
            <h3>App Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis. </p>
            <a href="" class="link-portfolio">Learn more...</a>
          </div>
        </div>
      </div>
    )
}