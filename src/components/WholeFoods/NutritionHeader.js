import React from 'react';

import './Scss/NutritionHeader.css';

const NutritionHeader = () => {
    return (
        <div className='nutrition-header-main row'>
            <div className='col-sm-6 title'>
                <p>Whole Foods</p>
                <p>Plant-Based</p>
                <p>Nutrition</p>
            </div>
            <div className='col-sm-6'></div>
        </div>
    );
};

export default NutritionHeader;