
import React,{useState} from "react";
import "../sass/login.css"
import Buttoncomponent from "./button";
import facebook from "../assets/fb.png"
import twiter from "../assets/twita.png"
import email from "../assets/image.png"
import axios from "axios";


export default function Loginform(){
    const [formData , setFormData] = useState({email:"",password:""})

    const HandleInputlogin = (e) =>{
        setFormData({
           ...formData,[e.target.name]:e.target.value
        })
    }
    const HandleLogin = async (e) =>{
        e.preventDefault();

        const API="https://type-bn-poltifolio.onrender.com/Jant/user/login"

        try {
            const response = await axios.post(API , formData ,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("role",response.data.data.user.role)
            alert("Login successfuly ok go to next")
            window.location.href="/brand"

            // if(response.data.data.user.role==="admin"){
            //     window.location.href="/adminpanel"
            //  }else if(response.data.data.user.role==="farmer"){
            //     window.location.href="/farmerpanel"
            //  }else{
            //    window.location.href="/product"
            //  }
        } catch (error) {
             console.log(error)
        }

    }
    return (
        <form onSubmit={HandleLogin}>
            <div className="division">
                <label htmlFor="email">Useremail
                    <input type="email" name="email" onChange={HandleInputlogin} value={formData.email} placeholder="Type your useremail"/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="password">Password
                    <input type="password" name="password" onChange={HandleInputlogin} value={formData.password} placeholder="Type your password"/>
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