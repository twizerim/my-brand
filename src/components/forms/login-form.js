import { Button, Checkbox, Form, Input } from 'antd';
import React,{useState} from 'react';
import axios from 'axios';

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

            if(response.data.data.user.role==="admin"){
                window.location.href="/admin"
            }else{
               window.location.href="/blogscreen"
            }
        } catch (error) {
             console.log(error)
        }

    }

    const onFinish = values => {
      HandleLogin()
        console.log('Success:', values);
      };
      // const onFinishFailed = errorInfo => {
      //   console.log('Failed:', errorInfo);
      // };
   return (
    <>
     <Form onFinish={onFinish}>
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      onMetaChange={HandleInputlogin}
      value={formData.email}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      onMetaChange={HandleInputlogin}
      value={formData.password}
    >
      <Input.Password />
    </Form.Item>
    

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        LOGIN
      </Button>
    </Form.Item>
    
     </Form>
    </>
   )
}