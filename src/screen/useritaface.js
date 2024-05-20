
import React from "react";
import "../sass/userdash.css"


export default function Userdadhbord(){
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
         <div class="skills" id="skills">
            <h1>Skills</h1>
            <div class="skills-card">
                <div class="card-one">
                    <i class="fa-solid fa-laptop" ></i>
                    <p>Web Development</p>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ullam,
                        quae dignissimos recusandae quia facere optio autem, omnis 
                        quam doloremque fugiat rerum aliquid quod, 
                        voluptatem maiores dolore quis!</h3>
                        <a href="" class="btn btn-block">Get started</a>
                </div>
                <div class="card-one">
                    <i class="fa-solid fa-code" ></i>
                    <p>UX/UI</p>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ullam,
                        quae dignissimos recusandae quia facere optio autem, omnis 
                        quam doloremque fugiat rerum aliquid quod, 
                        voluptatem maiores dolore quis!</h3>
                        <a href="" class="btn btn-block">Get started</a>
                </div>
                <div class="card-one">
                    <i class="fa-solid fa-palette" ></i>
                    <p>Gaphic Design</p>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ullam,
                        quae dignissimos recusandae quia facere optio autem, omnis 
                        quam doloremque fugiat rerum aliquid quod, 
                        voluptatem maiores dolore quis!</h3>
                        <a href="" class="btn btn-block">Get started</a>
                </div>
            </div>
         </div>
         <div class="my-courses" id="my-courses">
            <h1>My Courses</h1>
            <div class="Courses-card">
                <div class="Courses-one">
                    <p>HML</p>
                    <h3>80%-progress</h3>
                    <i class="fa-brands fa-html5" ></i>
                    <div class="courses-btn">
                    <a href="" class="btn bt-courses">continue</a>
                    </div>
                </div>
                <div class="Courses-one">
                    <p>CSS</p>
                    <h3>70%-progress</h3>
                    <i class="fa-brands fa-css3-alt" ></i>
                    <div class="courses-btn">
                    <a href="" class="btn bt-courses">continue</a>
                    </div>
                </div>
                <div class="Courses-one">
                    <p>JavaScript</p>
                    <h3>50%-Progress</h3>
                    <i class="fa-brands fa-square-js" ></i>
                    <div class="courses-btn">
                    <a href="" class="btn bt-courses">continue</a>
                    </div>
                </div>
            </div>
         </div>
         <div class="my-contact">
            <h1>Contact</h1>
            <div class="contact">
            <div class="view-contact">
                <i class="fa-solid fa-envelope" ></i>
                <h3>Email:... <span>gedeontwizerimana6@gmail.com</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo minus tempore, iusto consequatur fuga necessitatibus perspiciatis? Eos provident 
                tenetur magnam eligendi. Commodi nisi veniam ex cumque nam unde fuga voluptate.
            </p>
            <a href="" class="btn bt-courses">send me</a>
            </div>
            <div class="view-contact">
                <i class="fa-brands fa-square-whatsapp" ></i>
                <h3>Whatsapp:. <span>0783801966</span></h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo minus tempore, iusto consequatur fuga necessitatibus perspiciatis? Eos provident 
                tenetur magnam eligendi. Commodi nisi veniam ex cumque nam unde fuga voluptate.
            </p>
            <a href="" class="btn bt-courses">send me</a>
            </div>
            <div class="view-contact">
                <i class="fa-brands fa-facebook" ></i>
                <h3>Facebook:. <span>TG Jant Gedeon</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo minus tempore, iusto consequatur fuga necessitatibus perspiciatis? Eos provident 
                tenetur magnam eligendi. Commodi nisi veniam ex cumque nam unde fuga voluptate.
            </p>
            <a href="" class="btn bt-courses">send me</a>
            </div>
            <div class="view-contact">
                <i class="fa-solid fa-address-book" ></i>
                <h3>Phone_no:. <span>0733117441</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo minus tempore, iusto consequatur fuga necessitatibus perspiciatis? Eos provident 
                tenetur magnam eligendi. Commodi nisi veniam ex cumque nam unde fuga voluptate.
            </p>
            <a href="" class="btn bt-courses">send me</a>
            </div>
         </div>
        </div>
        <div class="location">
            <h1>Location</h1>
            <div class="place">
            <div class="view-location">
                <i class="fa-solid fa-location-dot" ></i>
                <h3>Kigali-Rwanda:..........</h3>
            </div>
        </div>
    </div>
    </div>
    </div>
   </>
    )
}