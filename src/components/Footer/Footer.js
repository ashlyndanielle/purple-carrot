import React from 'react';

import facebook from '../../Images/footer/facebookIcon.png';
import instagram from '../../Images/footer/instagramIcon.png';
import pinterest from '../../Images/footer/pinterestIcon.png';
import twitter from '../../Images/footer/twitterIcon.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='social-media'>
                <div className='social-links'>
                    <a href="https://www.facebook.com/purplecarrotxo">
                        <img src={facebook} alt=""/>
                    </a>
                </div>
                <div className='social-links'>
                    <a href="https://twitter.com/purplecarrotxo">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
                <div className='social-links'>
                    <a href="https://www.pinterest.com/thepurplecarrot/">
                        <img src={pinterest} alt=""/>
                    </a>
                </div>
                <div className='social-links'>
                    <a href="https://www.instagram.com/purplecarrotxo/">
                        <img src={instagram} alt=""/>
                    </a>
                </div>
            </div>
            <div className='links'></div>
            <div className='copywrite'></div>
        </div>
    );
};

export default Footer;