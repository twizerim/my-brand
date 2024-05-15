
import React from "react";
import "../sass/style.css"


export default function Skills(){
    return (
        <div class="portfolio-container" id="skills">
        <h1 class="heading-title">Skills</h1>
        <div class="triangle">
            <div class="oners"><h5>Figma</h5></div>
            <div class="duoble">
                <h5>Html</h5>
                <h5>React</h5>
                <h5>React native</h5>
            </div>
            <div class="duoble">
                <h5>Css</h5>
                <h5>Sass</h5>
                <h5>Javascript</h5>
                <h5>Tilwindcss</h5>
            </div>
            <div class="duoble">
                <h5>Mongodb</h5>
                <h5>Appwrite</h5>
                <h5>Supabase</h5>
            </div>
            <div class="oners"><h5>Node.js</h5></div>
            <div class="oners"><h5>Typescript</h5></div>
         </div>
        <div class="card-container">
          <div class="card card-one">
            <i class="fa-solid fa-code"></i>
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis.</p>
              <a href="/skills" class="link-portfolio">Learn more...</a>
          </div>
          <div class="card card-two">
            <i class="fa-solid fa-crop-simple" ></i>
            <h3>UI/UX Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis..</p>
            <a href="/skills" class="link-portfolio"><p>Learn more...</p></a>
          </div>
          <div class="card card-three">
            <i class="fa-brands fa-app-store" ></i>
            <h3>App Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ea doloremque cumque repudiandae distinctio facilis. </p>
            <a href="/skills" class="link-portfolio">Learn more...</a>
          </div>
        </div>
      </div>
    )
}