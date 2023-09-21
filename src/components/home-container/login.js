
import React from "react";
import "../../sass/login.css"
import image from "../../assets/login.jpeg"
import Loginform from "../forms/login-form";


export default function Login(props){
    return (
   <>
    <div>
    <div className="flex">
        <div>
          <img src={image} alt="login"/>
        </div>
      <div className="flex flex-col justify-center">
     <Loginform/>
     
      </div>
    
      </div>
      <div className="flex justify-end pr-12">
       <p>If you don't have an Account<span onClick={props.pass} className="text-blue-800"> SIGN UP</span></p>
     </div>
    </div>
   </>
        
    )
}