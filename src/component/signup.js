
import React,{useState} from "react";
import "../sass/login.css"
import Buttoncomponent from "./button";
import axios from "axios";


export default function Signupform(props){
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
        <div className="log-continer">
        <form onSubmit={HandleSignup} className="loginform">
            <h1>SIGN UP</h1>
            <div className="division">
                <label htmlFor="fullname">
                    <input type="text" name="fullname" className="loging" onChange={HandleInputSignup} value={formData.fullname} placeholder="Fullname "/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="email">
                    <input type="email" name="email" className="loging" onChange={HandleInputSignup} value={formData.email} placeholder="Useremail"/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="password">
                    <input type="password" name="password" className="loging" onChange={HandleInputSignup} value={formData.password}  placeholder="Password"/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="confrimpassword">
                    <input type="password" name="confrimpassword" className="loging" onChange={HandleInputSignup} value={formData.confrimpassword} placeholder="Confrimpassword"/>
                </label>
            </div>
            
            <Buttoncomponent
               name="Submit"
            />
            
        </form>
        <div className="other-method">
        <div className="signbottom">
               <p>Have an Account?</p>
               <span>Login to access premium tools and services. We provides all things which is needed for you</span>
               <span onClick={props.pass} className="pick">LOGIN</span>
            </div>
        </div>
        </div>
    )
}