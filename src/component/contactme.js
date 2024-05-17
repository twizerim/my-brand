import React,{useState} from "react";
import "../sass/style.css"
import axios from "axios";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function Contactme() {
  const [formData , setFormData]=useState({fullname:"",email:"",message:""})

     const HandleInputcontact = (e) =>{
      setFormData({
         ...formData,[e.target.name]:e.target.value
      })
    }

    const Handlecontact = async (e) =>{
        e.preventDefault();

        const API="https://type-bn-poltifolio.onrender.com/Jant/message"

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
    <div className="conta-contain" id="contact">
      <div className="warning"><h1 className="heading-title">Contact-Us</h1></div>
      <div className="contact">
        <div className="contact-left">
          <h3>Get in Touch</h3>
          <p className="text-welcome">We'd love to hear from you. Our friendly team <span>is always here to chat</span></p>
          <div className="social-media">
            <div className="media-icons">
              <ForwardToInboxIcon/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <HomeIcon/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <PhoneInTalkIcon/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div className="social-media-icons-links">
          <a href="https://www.facebook.com/tgjant.gedeon"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/></a>
            <a href="https://github.com/twizerim"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="contact-right">
          <h3>Feel Free To Contact-Us</h3>
          <form action="" className="form-page" onSubmit={Handlecontact}>
            <input type="text" name="fullname" id="fullName" onChange={HandleInputcontact} value={formData.fullname} required placeholder="Type Your FullName" />
            <input type="email" name="email" id="email" onChange={HandleInputcontact} value={formData.email} required placeholder="Type Your Email" />
            <textarea name="message" id="message" cols="30" onChange={HandleInputcontact} value={formData.message} rows="5" placeholder="Type Your Message......"></textarea>
            <div className="button-container text-center">
              <button type="submit" className="btn btn-red">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
