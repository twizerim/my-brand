import { useState } from "react";
import { useSignUpMutation } from "../redux/apiSlice";
import { notification } from "antd";


export const useSignUp = () =>{

    const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confrimPassword:""})
    const [addSignUp] = useSignUpMutation()

     const HandleInputchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmition = async() =>{
    
     const res = await addSignUp(formData).unwrap()
     notification.success({message:res.data.message})
  }

  return {HandleSubmition,formData,HandleInputchange}
}