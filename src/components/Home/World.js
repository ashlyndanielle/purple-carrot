import React from 'react';

import ham from '../../Images/homeView/veganbeetburger-lg.png';
import water from '../../Images/homeView/conserves-water.png';
import carbon from '../../Images/homeView/carbon-emissions.png';
import farm from '../../Images/homeView/protects-farmland.png';
import wedge from '../../Images/homeView/yellow-wedge.png';

import './Scss/World.css';

const World = () => {
    return (
        <div className='world-main'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='ham-wrapper'>
                        <img src={ham} alt=""/>
                    </div>
                </div>
                <div className='col-sm-6'>
                    
                </div>
            </div>
            <div className='col-sm-12 hidden-xs wedge'>
                <div className='yellow'>
                    <img src={wedge} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default World;