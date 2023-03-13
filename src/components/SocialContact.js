import React from "react";
import LinkedinIcon from "./../assets/images/linkedin-icon.svg";
import githubIcon from "./../assets/images/github-icon.svg";
import faceIcon from "./../assets/images/facebook-icon.svg";

const SocialContact = () => {
  return (
    <div>
      <div class="social-contact-box">
        <div class="socail-contact-box-links">
          <ul>
            <li>
              <a href="">
                <img src={LinkedinIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={githubIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact-email-box">
        <div class="contact-email-box-link">
          <a href="">yasmineiismail@gmail.com</a>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SocialContact;
