import React, { Component } from 'react';

import GithubIcon from '../images/github-icon.png';
import InstagramIcon from '../images/instagram-icon.png';

class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <div className="social-media">
                   <a href="https://github.com/Atilla20"> <img className="github-icon" src={GithubIcon} alt="github icon"/></a>
                  <a href="https://www.instagram.com/antillack/?hl=en"> <img className="instagram-icon" src={InstagramIcon} alt="instagram icon"/></a>
                </div>
            </div>
        )
    }
}

export default Footer;