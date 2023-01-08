import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="mailid" style={{color:'black'}}>akash.akke4@gmail.com</div>
        <div>
        <a href="tel:9047346659">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/phone-173-103873.png"
            width="40px"
            
          />
        </a>
        <a href="mailto:rakashpraveen@karunya.edu.in">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png"
            width="40px"
            
          />
        </a>
        </div>
       
        <div className="f-icons">
          <a
            style={{ padding: "20px" }}
            href="https://in.linkedin.com/in/akash-praveen"
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/linkedin-3506278-2932736.png"
              alt="Girl in a jacket"
              width="40rem"
            />
          </a>

          <a style={{ padding: "20px" }} href="https://github.com/Akashakke">
            <img
              src="https://education.github.com/assets/pack/icon_github-pages-3f2eb02545ca7c3e81beb0a464e85fb5340ec9d689133db563d1869350d6416c.png"
              width="40rem"
            />
          </a>
          <a
            style={{ padding: "20px" }}
            href="https://www.instagram.com/_akie4/"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/instagram-52-151106.png"
              alt="Girl in a jacket"
              width="40rem"
            />
          </a>
          <a style={{ padding: "20px" }} href="https://twitter.com/akke_akash">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/twitter-3770969-3147586.png"
              alt="Girl in a jacket"
              width="40rem"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
