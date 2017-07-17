import React, { Component } from 'react';


import artichoke from '../../Images/homeView/artichoke.jpg';
import create from '../../Images/homeView/we-create.png';
import deliver from '../../Images/homeView/we-deliver.png';
import cook from '../../Images/homeView/we-cook.png';

import './Scss/Power.css';

class Power extends Component {
    render() {
        return (
            <div className='power-main row'>
                <div className='col-sm-offset-1 col-sm-11 title'>
                    <h1>Power, <br/>delivered.</h1>
                </div>
                <div className='col-sm-offset-1 col-sm-5 bullets'>
                    <div className="bulletpoint">
                        <div className='img-wrapper'>
                            <img className='icons' src={create} alt="we create icon"/>
                        </div>
                        <p><strong>We create</strong> delicious plant-based recipes each week.</p>
                    </div>
                    <div className="bulletpoint">
                        <div className='img-wrapper'>
                            <img className='icons' src={deliver} alt="we deliver icon"/>
                        </div>
                        <p><strong>We deliver</strong> fresh, perfectly portioned ingredients.</p>
                    </div>
                    <div className="bulletpoint">
                        <div className='img-wrapper'>
                            <img className='icons' src={cook} alt="we cook icon"/>
                        </div>
                        <p><strong>You cook</strong> power-packed meals that are easy to make and outrageously good to eat.</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img className='artichoke' src={artichoke} alt="box image"/>
                </div>
            </div>
        );
    }
}

export default Power;