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
                <div className='col-sm-offset-1 col-sm-5'>
                    <h1>Nutrition Delivered.</h1>
                    <div className='bullets'>
                        <div className="bulletpoint col-sm-12">
                            <div className='img-wrapper col-sm-3'>
                                <img className='icons' src={create} alt="we create icon"/>
                            </div>
                            <div className='col-sm-9'>
                                <p><span>We create</span> delicious plant-based recipes each week.</p>
                            </div>
                        </div>
                        <div className="bulletpoint col-sm-12">
                            <div className='img-wrapper col-sm-3'>
                                <img className='icons' src={deliver} alt="we deliver icon"/>
                            </div>
                            <div className='col-sm-9'>
                                <p><span>We deliver</span> fresh, perfectly portioned ingredients.</p>
                            </div>
                        </div>
                        <div className="bulletpoint col-sm-12">
                            <div className='img-wrapper col-sm-3'>
                                <img className='icons' src={cook} alt="we cook icon"/>
                            </div>
                            <div className='col-sm-9'>
                                <p><span>You cook</span> power-packed meals that are easy to make and outrageously good to eat.</p>
                            </div>
                        </div>
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