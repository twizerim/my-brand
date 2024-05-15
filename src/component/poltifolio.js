
import React from "react";
import "../sass/style.css"
import picture from "../assets/ff.jpeg"


export default function Portifolio(){
    return (
        <div class="skills-container" id="portfolio">
        <h1 class="heading-title">Portfolio</h1>
        <div class="images-container">
            <div class="skills-card">
                <img src={picture} alt=""/>
                <div class="skills-content">
                    <div class="skills-content--content">
                    <h3>Social media App</h3>
                    <p>The app connect you yo the talent</p>
                    <div class="skills-icon-container">
                    <a href="https://twizerim.github.io/Gedeon-poltifolio/">
                    <i class="fa-sharp fa-solid fa-up-right-from-square"></i>
                </a>
                </div>
               </div>
            </div>
           </div>
            <div class="skills-card">
            <img src={picture} alt=""/>
                <div class="skills-content">
                    <div class="skills-content--content">
                    <h3>Social media App</h3>
                    <p>The app connect you yo the talent</p>
                    <div class="skills-icon-container">
                    <a href="https://masterkraft.vercel.app/">
                    <i class="fa-sharp fa-solid fa-up-right-from-square"></i>
                </a>
                </div>
               </div>
            </div>
           </div>
           <div class="skills-card">
           <img src={picture} alt=""/>
            <div class="skills-content">
                <div class="skills-content--content">
                <h3>Social media App</h3>
                <p>The app connect you yo the talent</p>
                <div class="skills-icon-container">
                <a href="https://true-rice-project.vercel.app/">
                <i class="fa-sharp fa-solid fa-up-right-from-square"></i>
            </a>
            </div>
           </div>
        </div>
       </div>
   </div>
   </div>
    )
}