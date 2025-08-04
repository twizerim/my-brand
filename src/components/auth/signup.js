
import React from "react";
import "../../sass/login.css"
import Signupform from "../forms/signup-form";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";


export default function Signup(props){
    
    return (
        <>
         <div className="mt-40">
            <div className="bg-white rounded-xl px-4 sm:px-10 py-10">
                <h1 className="text-left font-bold pb-4 md:pb-10 text-xl md:text-3xl">Register Your Account</h1>
              <Signupform/>
            </div>
           <div className="flex flex-col md:flex-row justify-between items-center md:items-center pl-4 pr-4 md:pl-20 md:pr-10 py-6 bg-white mt-10 rounded-xl">
              <div className="flex flex-col">
                 <p className="text-2xl font-bold">Already have an account?</p>
                  <p>Go to Login</p>
              </div>
               <Button className="mt-5" onClick={props.pass}>Login <LoginOutlined style={{color:"#F0147A",marginLeft:8}}/></Button>
          </div>
        </div>
        </>
    )
}