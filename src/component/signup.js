
import React,{useState} from "react";
import "../sass/login.css"
import Buttoncomponent from "./button";
import facebook from "../assets/fb.png"
import twiter from "../assets/twita.png"
import email from "../assets/image.png"
import axios from "axios";


export default function Signupform(){
    const [formData , setFormData] = useState({
        fullname:"",email:"",password:"",confrimpassword:""
    })

    const HandleInputSignup = (e) =>{
        setFormData({
           ...formData,[e.target.name]:e.target.value
        })
    }

    const HandleSignup = async (e) =>{
        e.preventDefault();

        const API="https://type-bn-poltifolio.onrender.com/Jant/user/create"
          
        try {
            const response = await axios.post(API,formData,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={HandleSignup}>
            <div className="division">
                <label htmlFor="fullname">Fullname
                    <input type="text" name="fullname" onChange={HandleInputSignup} value={formData.fullname} placeholder="Type your full name "/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="email">Useremail
                    <input type="email" name="email" onChange={HandleInputSignup} value={formData.email} placeholder="Type your user email"/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="password">Password
                    <input type="password" name="password" onChange={HandleInputSignup} value={formData.password}  placeholder="Type your password"/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="confrimpassword">Confrimpassword
                    <input type="password" name="confrimpassword" onChange={HandleInputSignup} value={formData.confrimpassword} placeholder="Type your password"/>
                </label>
            </div>
            
            <Buttoncomponent
               name="Submit"
            />
            <div className="online">
                <p>Or sign up using</p>
                <div className="images">
                <img id="feb" src={facebook} alt="Logo" /> 
                <img id="twi" src={twiter} alt="Logo" /> 
                <img id="feb" src={email} alt="Logo" />  
                </div>
            </div>
        </form>
    )
}