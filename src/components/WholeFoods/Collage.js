import React from 'react';

import carrot from '../../Images/nutrition/carrots.webp';
import vegan from '../../Images/nutrition/vegans-doit.webp';

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
                    <div className='left-top'>
                        <div className='overlay'>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach. Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.</p>
                        </div>
                    </div>
                    <div className='left-bottom'></div>
                </div>
                <div className='right-side col-md-8 col-sm-6'>
                    <div className='right-top'></div>
                    <section className='right-bottom row'>
                        <div className='col-md-7 right-inner-container'>
                            <div className='right-inner-top'>WHAT DO VEGANS EAT</div>
                            <div className='right-inner-bottom row'>
                                <div className='col-sm-6'>
                                    <img className='logo second' src={carrot}/>
                                </div>
                                <div className='col-sm-6'>
                                    <img className='logo first' src={vegan}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 right-right-container hidden-sm'>
                            <div className='overlay'>
                                <h1>VEGGIE IPSUM</h1>
                                <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
                                    Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
                                    Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Collage;