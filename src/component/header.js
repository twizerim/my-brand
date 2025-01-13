
import React, { useState } from "react";
import "../sass/style.css"
import StarLogo from "./logo";
import { MenuOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';


export default function Navigation(){
    const  [menu,setMenu]=useState(false)
    const [hidicon,sethideicon]=useState(true)
    const [close,setcloseicon]=useState(false)

    const handlemenu = ()=>{
        setMenu(true)
        sethideicon(false)
        setcloseicon(true)
    }
    const Hidenavigate = () =>{
        setMenu(false)
        sethideicon(true)
        setcloseicon(false)
    }
    return (
        <>
           <nav className={menu=== true ? 'navrespone':''}>
             <div className="combine-log">
                 <div class="logo">
                  < StarLogo className='head-logo'/>
                   <h3>UI/XI</h3>
                </div>
                {close && (<CloseOutlined className="menu" onClick={Hidenavigate}/>)}
            </div>
        <div class="link">
            <ul className={menu=== true ? 'navlinks':'links'}>
                <li><a href="./#about" class="nav-links">About Me</a></li>
                <li><a href="./blogscreen" class="nav-links">Blogs</a></li>
                <li><a href="./#contact" class="nav-links">Contact Me</a></li>
                <li><a href="login" class="nav-links btn btn-green">Login</a></li>
            </ul>
            {hidicon && (
                <div className="respo" onClick={handlemenu}>
                <MenuOutlined className="menu"/>
                </div>
            )}

        </div>
    </nav>
        </>
    )
}


