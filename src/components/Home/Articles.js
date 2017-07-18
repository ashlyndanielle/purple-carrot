import React from 'react';

import forbes from '../../Images/homeView/forbes.svg';
import today from '../../Images/homeView/today.svg';
import fastCompany from '../../Images/homeView/fast-company.svg';

import './Scss/Articles.css';

const Articles = () => {
    return (
        <div className='articles-main row'>
            <div className='articles col-sm-4'>
                <img src={forbes} alt='' className='articles-img'/>
            </div>
            <div className='articles col-sm-4'>
                <img src={today} alt='' className='articles-img'/>
            </div>
            <div className='articles col-sm-4'>
                <img src={fastCompany} alt='' className='articles-img'/>
            </div>
        </div>
    );
};

export default Articles;