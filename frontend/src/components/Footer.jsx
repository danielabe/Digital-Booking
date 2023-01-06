import { ReactComponent as IconFacebook } from '../assets/icons/Facebook.svg';
import { ReactComponent as IconLinkedin } from '../assets/icons/Linkedin.svg';
import { ReactComponent as IconTwitter } from '../assets/icons/Twitter.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/Instagram.svg';
import '../styles/Footer.css';
/* import React from 'react'; */

const Footer = () => {
    return (
        <footer>
            <p className='text'>©2021 Digital Booking</p>
            <div className='social-network'>
                <IconFacebook className='icon-social-network'></IconFacebook>
                <IconLinkedin className='icon-social-network'></IconLinkedin>
                <IconTwitter className='icon-social-network'></IconTwitter>
                <IconInstagram className='icon-social-network'></IconInstagram>
            </div>
            {/* </div> */}
        </footer>
    );
}

export default Footer;