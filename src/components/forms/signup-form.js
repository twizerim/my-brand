import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React,{useState} from 'react';

export default function Signupform(){

    const [formData , setFormData] = useState({
        firstname:"",lastname:"",email:"",password:"",confrimpassword:""
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
    <>
      <Form onFinish={HandleSignup}>
           <div className="flex items-center gap-2" >
               <Form.Item
                label="Fist Name"
                name="fistname"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={formData.firstname}
              >
                <Input />
              </Form.Item>
          
              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={formData.lastname}
                onMetaChange={HandleInputSignup}
              >
                <Input />
              </Form.Item>
               </div>
          
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={formData.email}
                onMetaChange={HandleInputSignup}
              >
                <Input />
              </Form.Item>
          
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                onMetaChange={HandleInputSignup}
                value={formData.password}
              >
                <Input.Password />
              </Form.Item>
          
              <Form.Item
                label="Confrim Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                onMetaChange={HandleInputSignup}
                value={formData.confrimpassword}
              >
                <Input.Password />
              </Form.Item>
          
              <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Agree terms and condition</Checkbox>
              </Form.Item>
          
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  SIGN UP
                </Button>
              </Form.Item>
              
               </Form>
    </>
   )
}