
import React from "react";
import "../sass/login.css"
import Buttoncomponent from "./button";
import facebook from "../assets/fb.png"
import twiter from "../assets/twita.png"
import email from "../assets/image.png"


export default function Loginform(){
    return (
        <form>
            <div className="division">
                <label>Useremail
                    <input type="" placeholder="Type your useremail"/>
                </label>
            </div>
            <div className="division">
                <label>Password
                    <input type="" placeholder="Type your password"/>
                </label>
            </div>
            <p>Forgot password?</p>
            <Buttoncomponent
               name="Login"
            />
            <div className="online">
                <p>Or sign up using</p>
                <div className="images">
                <img id="feb" src={facebook} alt="Logo" /> 
                <img id="twi" src={twiter} alt="Logo" /> 
                <img id="feb" src={email} alt="Logo" />  
                </div>
            </div>
            <div className="signbottom">
               <p>Or sign up using</p>
               <span>SIGN UP</span>
            </div>
        </form>
    )
}