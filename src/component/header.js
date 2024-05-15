
import React from "react";
import "../sass/style.css"


export default function Navigation(){
    return (
        <>
           <nav>
        <div class="logo">
            <h3>UI/XI</h3>
        </div>
        <div class="links">
            <ul class="nav-links">
                <li><a href="#home" class="nav-links">Home</a></li>
                <li><a href="#about" class="nav-links">About Me</a></li>
                <li><a href="#portfolio" class="nav-links">Portfolio</a></li>
                <li><a href="#skills" class="nav-links">skills</a></li>
                <li><a href="#dashboard" class="nav-links">Blogs</a></li>
                <li><a href="#contact" class="nav-links">Contact Me</a></li>
                <li><a href="#login-form" class="nav-links btn btn-green">Login</a></li>
            </ul>
        </div>
    </nav>
        </>
    )
}


