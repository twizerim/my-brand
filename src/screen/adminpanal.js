
import React, { useState } from "react";
import "../sass/userdash.css"
import { MenuOutlined,CloseOutlined,WindowsOutlined,HomeOutlined,ContactsOutlined,UsergroupAddOutlined,OpenAIOutlined } from '@ant-design/icons';
import Blogscontainer from "../container/blogs";
import Useroparation from "../container/useroperation";


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
    
    <div class="dash-container">
        {nav && (
            <div class="dash-left">
                <div className="respone">
                {show && (< MenuOutlined onClick={HandelNav} className="menu-icon"/>)}
                {hide && (<CloseOutlined onClick={HandelCloseNav} className="menu-icon"/>)}
            </div>
            <div class="dsh-icon">
                <div class="dsh">
                <i><WindowsOutlined className="admin"/><p>Dashboard</p></i>
                
                </div>
                <div class="dsh">
                 <i><HomeOutlined className="admin"/><p>Home</p></i>

                </div>
                <div class="dsh">
                <i className={users=== true ? "activebar":""} onClick={Handeleuser}><UsergroupAddOutlined className="admin"/><p>Profile</p></i>
                
                </div>
               <div class="dsh">
               <i ><ContactsOutlined className="admin"/><p>Contact</p></i>
                
               </div>
              <div class="dsh">
              <i className={blog=== true ? "activebar":""} onClick={Handeleblog}><OpenAIOutlined className="admin"/><p>Articols</p></i>
                
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