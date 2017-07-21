import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Scss/Promo.css';

import bolt from '../../Images/homeView/purple-bolt.png';

class Promo extends Component {
    render() {
        return (
            <div className='promo-main center-block'>
                <img className='purple-bolt' src={bolt} alt="purple bolt"/>
                <div className='promo-text1-container'>
                    <div className='promo-text1'>
                        <span className='bold'>get $20 off</span> your first order
                    </div>
                </div>
                <Link to='/recipes' className='button'>try it now</Link>
                <div className='promo-text2'>
                    <div>use code</div>
                    <div className='bold'>PURPLE20</div>
                </div>
            </div>
        );
    }
}

export default Promo;