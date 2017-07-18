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
                        <img className='ham-icon' src={ham} alt=""/>
                    </div>
                </div>
                <div className='col-sm-6 text-side'>
                    <h1>GOOD FOR <br/>THE WORLD</h1>
                    <p className='text'>When you choose to eat plant-based meals, you're choosing to drastically reduce your environmental footprint.</p>
                    <p className='text bold'>Eating a black bean burger vs. a regular burger:</p>
                    <div className='row icon-bullets'>
                        <div className='col-sm-4'>
                            <img src={water} alt=""/>
                            <p>CONSERVES WATER</p>
                        </div>
                        <div className='col-sm-4'>
                            <img src={carbon} alt=""/>
                            <p>REDUCES EMISSIONS</p>
                        </div>
                        <div className='col-sm-4'>
                            <img src={farm} alt=""/>
                            <p>PROTECTS FARMLAND</p>
                        </div>
                    </div>
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