import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'bootstrap';

import greenBolt from '../../Images/homeView/green-bolts.png';

import './Scss/Recipes.css';

class Recipes extends Component {
    render() {
        return (
            <div className='recipes-main'>
                <div className='row'>
                    <div className='header col-sm-4 col-sm-offset-4'>
                        <h1>SO HEALTHY <br/>SO DELICIOUS</h1>
                        <img src={greenBolt} alt="" className='green-bolt'/>
                        <div className='header-text'>
                            <p>Each week, our chefs create new dishes inspired by seasonal flavors that will tempt, delight, and energize.</p>
                        </div>
                    </div>
                    <div className='menu-button col-sm-4 col-sm-offset-4'>
                        <Link to='/menu' className='button'>see this week's menu</Link>
                    </div>
                </div>
                {/*<Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>*/}
            </div>
        );
    }
}

export default Recipes;