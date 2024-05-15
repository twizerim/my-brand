
import React,{useState} from "react";
import "../sass/login.css"
import Buttoncomponent from "./button";
import axios from "axios";


export default function Loginform(props){
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

            if(response.data.data.user.role==="admin"){
                window.location.href="/admin"
            }else{
               window.location.href="/blogscreen"
            }
        } catch (error) {
             console.log(error)
        }

    }
    return (
        <div className="log-continer">
            <form onSubmit={HandleLogin} className="loginform">
            <h1>LOGIN</h1>
            <div className="division">
                <label htmlFor="email">
                    <input type="email" name="email" className="loging" onChange={HandleInputlogin} placeholder="Useremail" value={formData.email}/>
                </label>
            </div>
            <div className="division">
                <label htmlFor="password">
                    <input type="password" name="password" className="loging" onChange={HandleInputlogin} placeholder="Password" value={formData.password}/>
                </label>
            </div>
            <p>Forgot password?</p>
            <Buttoncomponent
               name="Login"
            />
            </form>
            <div className="other-method">
            <div className="signbottom">
               <p>Don't Have an Account?</p>
               <span>We are here to serve the whole techno world with our service.</span>
               <span onClick={props.pass} className="pick">SIGN UP</span>
            </div>
            </div>
        </div>
        
    )
}