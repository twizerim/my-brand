import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React,{useState} from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function ConctactForm(){

  const [formData , setFormData]=useState({firstname:"",lastname:"",subject:"",email:"",message:""})

  const HandleInputcontact = (e) =>{
   setFormData({
      ...formData,[e.target.name]:e.target.value
   })
 }

 const Handlecontact = async () =>{
     const API="https://my-brand-b.onrender.com/api/v1/contact"

     try {
       const response = await axios.post(API,formData,{
           headers: {
           'Content-Type': 'application/json'
          }
       })
       alert("message sent")
       console.log(response)
     } catch (error) {
        console.log(error)
     }
 }
    return (
        <>
          <Form  onFinish={Handlecontact} layout="vertical">
             <div className='flex justify-between items-center gap-3'>
               <div className='w-1/2'>
               <Form.Item
                label="First Name"
                name="fistname"
                value={formData.firstname}
                onChange={HandleInputcontact}
              >
                <Input />
              </Form.Item>
               </div>
                <div className='w-1/2'>
                <Form.Item
                label="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={HandleInputcontact}
              >
                <Input />
              </Form.Item>
                </div>
             </div>
             <div className='flex justify-between items-center gap-3'>
                <div className='w-1/2'>
                <Form.Item
                label="Username"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={formData.email}
                onChange={HandleInputcontact}
              >
                <Input />
              </Form.Item>
                </div>
                   <div className='w-1/2'>
                     <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please input your object!' }]}
                value={formData.subject}
                onChange={HandleInputcontact}
              >
                <Input />
              </Form.Item>
                   </div>
              </div>
          
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your password!' }]}
                value={formData.message}
                onChange={HandleInputcontact}
              >
                <Input.TextArea />
              </Form.Item>
              
          
              <div className='flex justify-between items-center'>
                <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>I agree that it is true message</Checkbox>
              </Form.Item>
          
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" onSubmit={Handlecontact}>
                  SUBMIT
                  <ArrowRightOutlined style={{marginLeft:8,color:'white'}}/>
                </Button>
              </Form.Item>
              </div>
              
               </Form>
        </>
    )
}