import React, { Component } from 'react';

import cauliflower from '../../Images/homeView/cauliflower.jpg';
import tofu from '../../Images/homeView/tofu-steaks.jpg';
import jackfruit from '../../Images/homeView/jackfruit.jpg';
import skewers from '../../Images/homeView/coffee-skewers.jpg';
import scallops from '../../Images/homeView/seared-scallops.jpg';

import Slider from 'react-slick';

import './Scss/CarouselSlide.css';

class CarouselSlide extends Component {
    render() {

        let settings = {
            infinite: true,
            speed: 1000,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true
        }

        return (
            <div className='carousel-slide-main'>
                 <Slider {...settings} className="recipe-slider">
                    <div>
                        <div className="slide-img">
                             <img className='image' src={skewers} alt=""/>
                             <div className='words'>
                                <h1>Coffee Teriyaki Skewers</h1>
                                <h2>with Citrus Edamame Salad</h2>
                             </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={jackfruit} alt=''/>
                            <div className='words'>
                                <h1>Spicy Jackfruit and Bell Pepper Fajitas</h1>
                                <h2>with Lime Crema</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={cauliflower} alt=''/>
                            <div className='words'>
                                <h1>Cauliflower L'Orange</h1>
                                <h2>with Beets and Fresh Herbs</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={tofu} alt=''/>
                            <div className='words'>
                                <h1>Sesame Crusted Tofu Steaks</h1>
                                <h2>with Chermoula Sauce</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={scallops} alt=''/>
                            <div className='words'>
                                <h1>Seared 'Scallops'</h1>
                                <h2>with Stir-Fried Farro and Spicy Broccolini</h2>
                            </div>
                        </div>
                    </div>
                </Slider> 
            </div>
        );
    }
}

export default CarouselSlide;