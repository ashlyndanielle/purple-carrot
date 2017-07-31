import React, { Component } from 'react';

import './Scss/Food.css';

class Food extends Component {
    render() {
        return (
            <div className='food-main'>
                <section className='icons'>
                    <div className='icon-div1'></div>
                    <div className='icon-div2'></div>
                    <div className='icon-div3'></div>
                    <div className='icon-div4'></div>
                    <div className='icon-div5'></div>
                </section>
                <section className='nutrients row'>
                    <div className='col-sm-4 left-column'>
                        <div className='veggies'>

                        </div>
                        <div className='fruits'>
                            FRUITS
                        </div>
                    </div>
                    <div className='col-sm-8 right-column'>
                        <div className='fats row'>
                            <div className='overlay col-md-8'>
                                <p className=''>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley.</p>
                                <p className=''>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley.</p>
                            </div>
                            <div className='col-md-4 hidden-xs hidden-sm'></div>
                        </div>
                        <div className='row staples-column'>
                            <div className='protein-column col-sm-7'>
                                <div className='protein'>
                                    <div className='overlay'>
                                        <h1>PROTEINS</h1>
                                        <p>Spirulina</p>
                                        <p>Nutritional Yeast</p>
                                        <p>Nuts</p>
                                        <p>Seeds</p>
                                        <p>Nut Butters</p>
                                        <p>Tempeh</p>
                                        <p>Lentils</p>
                                        <p>Beans</p>
                                        <p>Bean Pastas</p>
                                        <p>Quinoa</p>
                                        <p>Groats</p>
                                    </div>
                                    {/* <circle className='circle-1'>Tofu</circle>
                                    <circle className='circle-2'>Tempeh</circle>
                                    <circle className='circle-3'>Quinoa</circle>
                                    <circle className='circle-4'>Groats</circle>
                                    <circle className='circle-5'>Nutritional Yeast</circle>
                                    <circle className='circle-6'>Beans</circle> */}
                                </div>
                                <div className='links'></div>
                            </div>
                            <div className='grains col-sm-5'></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Food;