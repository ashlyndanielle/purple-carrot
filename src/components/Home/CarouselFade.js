import React, { Component } from 'react';

import Slider from 'react-slick';

import './Scss/CarouselFade.css';

class CarouselFade extends Component {
    render() {

        let settings = {
            infinite: true,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1
        }

        return (
            <div className='carousel-fade-main'>
                <Slider {...settings} className='slider'>
                    <div className='slides'>
                        
                    </div>
                    <div className='slides'>

                    </div>
                    <div className='slides'>

                    </div>
                </Slider>
            </div>
        );
    }
}

export default CarouselFade;