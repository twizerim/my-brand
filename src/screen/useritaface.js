
import React from "react";
import "../sass/userdash.css"


export default function Adminpanal(){
    return (
        <>
          <nav>
        <div class="logo-title">
            <h1>TWIZERIMANA Jant~Gedeon</h1>
        </div>
        <div class="nav-links">
            <div class="nav-link">
                <ul>
                    <li><a href="#my-courses">Works</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Industries</a></li>
                </ul>
            </div>
            <div class="menu-icon">
                <i class="fa-solid fa-bars" ></i>
              </div>
        </div>
    </nav>
    <div class="dash-container">
        <div class="dash-left">
            <div class="dsh-icon">
                <div class="dsh">
                <i class="fa-solid fa-house"><a href="">Dashboard</a></i>
                
                </div>
                <div class="skll">
                <i class="fa-sharp fa-solid fa-building-columns" ><a href="#skills">Skills</a></i>
                
                </div>
                <div class="comm">
                <i class="fa-solid fa-comment" ><a href="">communicate</a></i>

                </div>
                <div class="loc">
                <i class="fa-solid fa-location-dot" ><a href="">location</a></i>
                
                </div>
               <div class="hel">
                <i class="fa-sharp fa-solid fa-circle-question" ><a href="">Help</a></i>
                
               </div>
              <div class="stt">
                <i class="fa-solid fa-gear" ><a href="">Setting</a></i>
                
              </div>
            </div>
        </div>
        <div class="dash-right">
         
    </div>
    </div>
   </>
    )
}