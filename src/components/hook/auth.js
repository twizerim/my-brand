import { useState } from "react";
import { useLoginMutation } from "../redux/apiSlice";
import { notification } from "antd";


export const useLogin = () =>{
     const [formData, setFormDataLogin] = useState({ email: "", password: "" });
     const [addLogin] = useLoginMutation();

    const HandleInputchange = (e) => {
    setFormDataLogin({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async () => {
      try {
        const res = await addLogin(formData).unwrap();
        localStorage.setItem("token", res.token);
        console.log(res)
        notification.success({
          message: res.message,
        });
        window.location.href = "/admin";
      } catch (err) {
        notification.error({
          message: "Login failed",
          description: err?.data?.message || "Invalid credentials",
        });
      }
    };
  
    // ✅ This must be returned at the top level
    return {
      formData,
      HandleSubmit,
      HandleInputchange,
    };
};