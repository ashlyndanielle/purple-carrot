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
        }

        return (
            <div className='carousel-slide-main'>
                 <Slider {...settings} className="recipe-slider">
                    <div>
                        <div className="slide-img">
                             <img className='image' src={skewers} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={jackfruit} alt=''/>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={cauliflower} alt=''/>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={tofu} alt=''/>
                        </div>
                    </div>
                    <div>
                        <div className="slide-img">
                            <img className='image' src={scallops} alt=''/>
                        </div>
                    </div>
                </Slider> 
            </div>
        );
    }
}

export default CarouselSlide;