import React from 'react';
import { Link } from 'react-router-dom';

import hunger from '../../Images/homeView/satisfy-words.png'

import './Scss/Satisfy.css';

const Satisfy = () => {
    return (
        <div className='satisfy-main'>
            <div className='words row'>
                <img src={hunger} alt=""/>
            </div>
            <div className='button-wrapper'>
                <Link to='/recipes' className='button'>TRY IT NOW</Link>
            </div>
        </div>
    );
};

export default Satisfy;