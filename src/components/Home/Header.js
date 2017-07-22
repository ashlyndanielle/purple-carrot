import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import plants from '../../Images/homeView/plants-power-yum-large.png';
import plantsSmall from '../../Images/homeView/plants-power-yum-mobile.png';

import './Scss/Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-main section-1'>
                <div className='hidden-xs'>
                    <img src={plants} alt='plants power yum'/>
                    <div className='large-text'>
                        <p>cook delicious, power-packed meals.  feel amazing.</p>
                        <Link to="/recipes" className='button'>Start purple carrot</Link>
                    </div>
                </div>
                <div className='hidden-sm hidden-md hidden-lg hidden-xl'>
                    <div className='image-container'>
                        <img src={plantsSmall} alt='plants power yum'/>
                    </div>
                    <div className='small-text'>
                        <p>cook delicious, <br/>power-packed meals.  <br/>feel amazing.</p>
                        <Link to='/recipes' className='button'>Start purple carrot</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;