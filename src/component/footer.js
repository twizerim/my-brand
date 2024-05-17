
import React from "react";
import "../sass/style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return (
    <div class="footer-container">
      <p className="footer">Copyright &copy;2023&lowast;Jant~Gedeon&lowast;Ngarama.Pbx</p>
      <div class="links-media-footer">
            <a href="https://www.facebook.com/tgjant.gedeon"><FacebookIcon/>Facebook</a>
            <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/>LinkedIn</a>
            <a href="https://github.com/twizerim"><GitHubIcon/>Github</a>
            <a href="www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedInIcon/>LinkedIn</a>
      </div>
  </div>
    )
}