
import React from "react";
import "../../sass/login.css"
import image from "../../assets/regist.jpeg"
import Signupform from "../forms/signup-form";


export default function Signup(props){
    
    return (
        <>
         <div>
         <div className="flex   ">
        <div>
          <img src={image} alt="login"/>
        </div>
      <div className="flex flex-col justify-between">
         <div className="pb-10 mb-6">
         <h1 className="text-left pb-10 mb-6">Fill this form to be registed</h1>
         </div>
        
          <Signupform/>
         
          </div>
        
          </div>
          <div className="flex justify-end pt-5">
           <p>Al ready have an Account<span onClick={props.pass} className="text-blue-800"> SIGN IN</span></p>
         </div>
         </div>
        </>
    )
}