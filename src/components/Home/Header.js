import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import plants from '../../Images/homeView/plants-power-yum-large.png';

import './Scss/Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-main section-1'>
                <img src={plants} alt='plants power yum'/>
                <div className='hidden-xs'>
                    <p>cook delicious, power-packed meals.  feel amazing.</p>
                    <Link to="/recipes" className='button'>Start purple carrot</Link>
                </div>
            </div>
        );
    }
}

export default Header;