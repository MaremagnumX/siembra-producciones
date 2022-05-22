import React from "react";
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
      return (
            <div className="container">
                  <div className="socials-container">
                        <ul className="socials-list">
                              <li><a className="socials-list-item" href="/" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ fontSize: 40 }} />  </a></li>
                              <li><a className="socials-list-item" href="/" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ fontSize: 40 }} />  </a></li>
                              <li><a className="socials-list-item" href="/" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ fontSize: 40 }} />  </a></li>
                              <li><a className="socials-list-item" href="/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 40 }} />  </a></li>
                              <li><a className="socials-list-item" href="/" target="_blank" rel="noopener noreferrer"><YouTubeIcon sx={{ fontSize: 40 }} />  </a></li>
                        </ul>
                  </div>
                  <div className="container-created-by">
                        <h5 className="created-by">©2022 by Valeria Argüello y Kevin Villamizar</h5>
                  </div>
            </div>
      )
}

export default Footer;