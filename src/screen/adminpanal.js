
import React, { useState } from "react";
import "../sass/userdash.css"
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import VignetteIcon from '@mui/icons-material/Vignette';
import BlindsIcon from '@mui/icons-material/Blinds';
import Blogscontainer from "../container/blogs";
import Useroparation from "../container/useroperation";
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


export default function Adminpanal(){
    const [users,setusers]=useState(false)
    const [blog,setBlog]=useState(true)
    const [nav,setNav]=useState(true)
    const [closenav,setClosenav]=useState(false)
    const [show,setshow]=useState(true)
    const [hide,sethide]=useState(false)

    const HandelNav = () =>{
        setNav(true)
        setClosenav(false)
        setshow(false)
        sethide(true)
    }
    const HandelCloseNav = () =>{
        setNav(false)
        setClosenav(true)
        setshow(true)
        sethide(false)
    }
    const Handeleuser = () =>{
        setBlog(false)
        setusers(true)
    }
    const Handeleblog = () =>{
        setBlog(true)
        setusers(false)
        
    }
    return (
        <>
          <nav>
          <div className="subNav">
          <div className="respone">
                {show && (<MenuIcon onClick={HandelNav} className="menu-icon"/>)}
                {hide && (<RestaurantMenuIcon onClick={HandelCloseNav} className="menu-icon"/>)}
            </div>
            <div class="logo-title">
            <h1>Jant~Gedeon</h1>
            </div>
          </div>
        
        <div class="nav-links">
            <div class="nav-link">
                <ul>
                    <li><a href="#my-courses">Works</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Industries</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="dash-container">
        {nav && (
            <div class="dash-left">
            <div class="dsh-icon">
                <div class="dsh">
                <i><BlindsIcon className="admin"/><p>Dashboard</p></i>
                
                </div>
                <div class="dsh">
                <i><SchoolIcon className="admin"/><p>Certificaants</p></i>
                
                </div>
                <div class="dsh">
                 <i><HomeIcon className="admin"/><p>Home</p></i>

                </div>
                <div class="dsh">
                <i className={users=== true ? "activebar":""} onClick={Handeleuser}><AccountBoxIcon className="admin"/><p>Profile</p></i>
                
                </div>
               <div class="dsh">
               <i ><ContactMailIcon className="admin"/><p>Contact</p></i>
                
               </div>
              <div class="dsh">
              <i className={blog=== true ? "activebar":""} onClick={Handeleblog}><VignetteIcon className="admin"/><p>Articols</p></i>
                
              </div>
            </div>
        </div>
        )}
        <div class="dash-right">
          {blog && (<Blogscontainer/>)}
          {users && (<Useroparation/>)}
    </div>
    </div>
   </>
    )
}