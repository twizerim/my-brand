import React from "react";
import "../sass/style.css"

export default function Contactme() {
  return (
    <div className="contact-container" id="contact">
      <h1 className="heading-title">Contact-Us</h1>
      <div className="contact">
        <div className="contact-left">
          <h3>Get in Touch</h3>
          <p className="text-welcome">We'd love to hear from you. Our friendly team <span>is always here to chat</span></p>
          <div className="social-media">
            <div className="media-icons">
              <i className="fa-solid fa-envelope" style={{ color: '#ffffff' }}></i>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <i className="fa-sharp fa-solid fa-house-circle-exclamation" style={{ color: '#ffffff' }}></i>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
            <div className="media-icons">
              <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
              <div className="media-chat">
                <h3>Chat to us</h3>
                <p>Chat to us
                  Our friendly team is here to help you <span>gedeontwizeyimana@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div className="social-media-icons-links">
            <a href="#" target="_blank"><i className="fa-brands fa-github" style={{ color: '#ccc' }}></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram" style={{ color: '#ccc' }}></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-twitter" style={{ color: '#ccc' }}></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-linkedin-in" style={{ color: '#ccc' }}></i></a>
          </div>
        </div>
        <div className="contact-right">
          <h3>Feel Free To Contact-Us</h3>
          <form action="" className="form-page">
            <input type="text" name="fullName" id="fullName" required placeholder="Type Your FullName" />
            <input type="email" name="email" id="email" required placeholder="Type Your Email" />
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Type Your Message......"></textarea>
            <div className="button-container text-center">
              <button type="submit" className="btn btn-red">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
