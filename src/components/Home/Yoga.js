import React from 'react';

import heart from '../../Images/homeView/health-heart.png';
import bolt from '../../Images/homeView/boost-energy.png';
import steth from '../../Images/homeView/prevent-disease.png';
import mom from '../../Images/homeView/yoga-mom.jpg';
import wedge from '../../Images/homeView/green-wedge.png';

import './Scss/Yoga.css';

const Yoga = () => {
    return (
        <div className='yoga-main row'>
            <div className='col-sm-4 col-sm-offset-1'>
                <h1>GOOD <br/>FOR YOU</h1>
                <p>Eating plant-based meals just a couple times a week can have a positive impact on the mind, body and soul.</p>
                <div className='row health-icons'>
                    <div className='img-icon col-sm-4'>
                        <img src={heart} alt=""/>
                    </div>
                    <div className='img-icon col-sm-4'>
                        <img src={bolt} alt=""/>
                    </div>
                    <div className='img-icon col-sm-4'>
                        <img src={steth} alt=""/>
                    </div>
                </div>
                <div className='row descriptions'>
                    <p className='col-sm-4'>promotes heart health</p>
                    <p className='col-sm-4'>boots energy</p>
                    <p className='col-sm-4'>prevents chronic disease</p>
                </div>
            </div>
            <div className='col-sm-6 col-sm-offset-1 yoga'>
                <div className='yoga-mom'>
                    <div>
                        <img src={mom} alt=""/>

                    </div>
                </div>
            </div>
            <div className='col-sm-12 hidden-xs wedge'>
                <div className='green'>
                    <img src={wedge} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Yoga;