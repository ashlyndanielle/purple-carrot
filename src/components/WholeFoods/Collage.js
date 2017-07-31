import React from 'react';

import './Scss/Collage.css';

const Collage = () => {
    return (
        <div className='collage-main'>
            <div className='icons'>
                <div className='icon-div1'></div>
                <div className='icon-div2'></div>
                <div className='icon-div3'></div>
                <div className='icon-div4'></div>
                <div className='icon-div5'></div>
            </div>
            <div className='collage-section row'>
                <div className='left-side col-md-4 col-sm-6'>
                    <div className='left-top'></div>
                    <div className='left-bottom'></div>
                </div>
                <div className='right-side col-md-8 col-sm-6'>
                    <div className='right-top'></div>
                    <section className='right-bottom row'>
                        <div className='col-md-7 right-inner-container'>
                            <div className='right-inner-top'></div>
                            <div className='right-inner-bottom'></div>
                        </div>
                        <div className='col-md-5 right-right-container hidden-sm'>
                            <div className='overlay'>
                                <h1>VEGGIE IPSUM</h1>
                                <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Collage;