
import React from "react";
import "../../../sass/style.css"
// import picture from "../assets/ff.jpeg"
import home from "../../../assets/home.png"
import doctor from "../../../assets/doctor.png"
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';


export default function Portifolio(){
    return (
        <div class="skills-container" id="portfolio">
        <h1 class="heading-title">Project</h1>
        
        <div className="poltifo">
            <div className="image">
               <img src={home} alt="Logo" />
            </div>
            <div className="polt-content">
               <h5>Featured</h5>
                <h6>Wekraft Project</h6>
                <p>A web app for used by school for the role of E-learning.This project is based on education for childreen where student study many
                    subject by video online.And it is used to buy any tools used in studing like books,pens,notbooks etc.
                </p>
                    <div className="link-project">
                      <a href="https://github.com/Franklin-pro/masterkraft/tree/main/src" target="_blank"><GithubOutlined className="pollink"/></a>
                      <a href="https://wekraft.org/ " target="_blank"><LinkOutlined className="pollink"/></a>
                     </div>
            </div>
        </div>
        <div className="poltifo">
            <div className="image">
               <img src={doctor} alt="Logo" />
            </div>
            <div className="polt-content">
               <h5>Featured</h5>
                <h6>Healthcare Project</h6>
                <p>A web app for visualizing personalized Spotify data. View your top artists, top 
                    tracks, recently played tracks, and detailed audio information about each track.</p>
                  <div className="link-project">
                    <a href="https://github.com/twizerim/Medical-Healthcare/tree/main/src" target="_blank"><GithubOutlined className="pollink"/></a>
                    <a href="https://medical-healthcare-git-main-twizerimana-gedeons-projects.vercel.app/" target="_blank"><LinkOutlined className="pollink"/></a>
                  </div>
            </div>
        </div>
   </div>
    )
}