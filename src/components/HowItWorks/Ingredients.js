import React from 'react';

import ingredientsLarge from '../../Images/howItWorks/ingredients_desktop.jpg';
import wedge from '../../Images/homeView/green-wedge.png';

import './Scss/Ingredients.css';

const Ingredients = () => {
    return (
        <div className='ingredients-main'>
            <div className='row'>
                <div className='text-side col-sm-6'>
                    <div className='title'>THE INGREDIENTS</div>
                    <div className='ingredient-info'>
                        <p>We take great pride in finding amazing ingredients for you to enjoy.</p>
                        <p>We work hard to source from the best farmers and food makers possible, all in a quest to make your dinners mouthwateringly good!</p>
                        <p>Every ingredient comes pre-measured, so there's no guess work and no waste.</p>
                    </div>
                </div>
                <div className='image-side col-sm-6'>
                    <div className='image'>
                        <img src={ingredientsLarge} alt=""/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='wedge col-xs-12'>
                    <img src={wedge} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Ingredients;