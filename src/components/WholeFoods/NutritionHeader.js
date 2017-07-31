import React from 'react';

import './Scss/NutritionHeader.css';

const NutritionHeader = () => {
    return (
        <div className='nutrition-header-main row'>
            <div className='overlay'>
                <div className='col-md-6 title'>
                    <p>Whole Foods Plant Based Nutrition</p>
                </div>
                <div className='col-md-6'></div>
            </div>
        </div>
    );
};

export default NutritionHeader;