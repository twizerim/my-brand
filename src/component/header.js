
import React, { useState } from "react";
import "../sass/style.css"
import StarLogo from "./logo";
import { MenuOutlined } from '@ant-design/icons';


export default function Navigation(){
    const  [menu,setMenu]=useState(false)

    const handlemenu = ()=>{
        setMenu(true)
    }
    return (
        <>
           <nav className={menu=== true ? 'navrespone':''}>
        <div class="logo">
            < StarLogo className='head-logo'/>
            <h3>UI/XI</h3>
        </div>
        <div class="link">
            <ul className={menu=== true ? 'navlinks':'links'}>
                <li><a href="./#home" class="nav-links">Home</a></li>
                <li><a href="./#about" class="nav-links">About Me</a></li>
                <li><a href="./#portfolio" class="nav-links">Portfolio</a></li>
                <li><a href="./#skills" class="nav-links">Skills</a></li>
                <li><a href="./blogscreen" class="nav-links">Blogs</a></li>
                <li><a href="./#contact" class="nav-links">Contact Me</a></li>
                <li><a href="login" class="nav-links btn btn-green">Login</a></li>
            </ul>
            <div className="respo" onClick={handlemenu}>
            <MenuOutlined className="menu"/>
            </div>

        </div>
    </nav>
        </>
    )
}


