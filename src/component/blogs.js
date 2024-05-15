
import React from "react";
import "../sass/style.css"
import image from "../assets/guy.jpeg"
import imag from "../assets/history.jpeg"

export default function Blogs(){
    return (
        <div class="blog-container" id="dashboard">
        <h1 class="heading-title">My Blog</h1>
        <div class="blog-cards">
          <div class="blog-card-one">
            <img src={image} alt=""/>
            <h2>Jant ~ Gedeon</h2>
            <h3>Our friendly team is here to help you</h3>
            {/* <div class="blog-p"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quis 
              dolorem deleniti id cumque dignissimos ullam soluta 
              repellendus exercitationem ducimus corrupti quidem, voluptas commodi 
              incidunt magni quae reprehenderit fuga eveniet.</p>
            </div> */}
              <a href="">Read more....</a>
            </div>
            <div class="blog-card-one">
            <img src={imag} alt=""/>
              <h2>Jant ~ Gedeon</h2>
              <h3>Our friendly team is here to help you</h3>
              {/* <div class="blog-p"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quis 
                dolorem deleniti id cumque dignissimos ullam soluta 
                repellendus exercitationem ducimus corrupti quidem, voluptas commodi 
                incidunt magni quae reprehenderit fuga eveniet.</p>
              </div> */}
                <a href="">Read more....</a>
              </div>
              <div class="blog-card-one">
              <img src={image} alt=""/>
                <h2>Jant ~ Gedeon</h2>
                <h3>Our friendly team is here to help you</h3>
                {/* <div class="blog-p"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quis 
                  dolorem deleniti id cumque dignissimos ullam soluta 
                  repellendus exercitationem ducimus corrupti quidem, voluptas commodi 
                  incidunt magni quae reprehenderit fuga eveniet.</p>
                </div> */}
                  <a href="">Read more....</a>
                </div>
          </div>
        </div>
    )
}