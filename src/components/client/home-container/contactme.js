import React from "react";
import "../../../sass/style.css"
import { GithubOutlined, FacebookOutlined,LinkedinOutlined,PhoneOutlined,CodeSandboxOutlined,HomeOutlined } from '@ant-design/icons';
import ConctactForm from "../../forms/contact-form";

export default function Contactme() {
  return (
    <div className="conta-contain" id="contact">
      <div className="warning"><h1 className="heading-title">Contact-Us</h1></div>
      <div className="contacts">
        <div className="contact-left">
          <h3>Get in Touch</h3>
          <p className="text-welcome">We'd love to hear from you. Our friendly team <span>is always here to chat</span></p>
          <div className="social-media">
            <div className="media-icons">
              <CodeSandboxOutlined className="menu"/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <HomeOutlined className="menu"/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>twizerimanagedeon6@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <PhoneOutlined className="menu"/>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>twizerimanagedeon273@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div className="social-media-icons-links">
          <a href="https://www.facebook.com/tgjant.gedeon"><FacebookOutlined className="menu"/></a>
               <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedinOutlined className="menu"/></a>
              <a href="https://github.com/twizerim"><GithubOutlined className="menu"/></a>
          </div>
        </div>
        <div className="contact-right">
          <h3 className="pb-40">Feel Free To Contact-Us</h3>
          <ConctactForm/>
        </div>
      </div>
    </div>
  )
}
