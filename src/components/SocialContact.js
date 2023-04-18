import React from "react";
import LinkedinIcon from "./../assets/images/linkedin-icon.svg";
import githubIcon from "./../assets/images/github-icon.svg";
import faceIcon from "./../assets/images/facebook-icon.svg";
import twitterIcon from "./../assets/images/twitter-icon.svg";

const SocialContact = () => {
  return (
    <div>
      <div class="social-contact-box">
        <div class="socail-contact-box-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/yasmine-ismail2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/yasmineismail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yassminismail10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact-email-box">
        <div class="contact-email-box-link">
          <a href="mailto:yasmineiismail@gmail.com">yasmineiismail@gmail.com</a>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SocialContact;
