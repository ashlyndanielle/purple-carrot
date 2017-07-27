import React from 'react';

import './Scss/RecipesHeader.css';

const RecipesHeader = () => {
    return (
        <div className='recipes-header-main'>
            <div className='title'>
                <p>Select from</p>
                <p>our Delicious Recipes.</p>
                <p className='sub-title'>We'll deliver right to your door</p>
            </div>
        </div>
    );
};

export default RecipesHeader;