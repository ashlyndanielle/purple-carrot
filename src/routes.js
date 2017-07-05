import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavBar from './components/MainNavBar/MainNavBar';
import Home from './components/Home/Home';
import WhyPlants from './components/WhyPlants/WhyPlants';
import HowItWorks from './components/HowItWorks/HowItWorks';


export default (
    <Switch>
        <Route exact path='/' render={ () => (
            <div>
                <MainNavBar />
                <Home/> 
            </div>
            ) } />
        <Route path='/why-plants' render={ () => (
            <div>
                <MainNavBar />
                <WhyPlants />
            </div>
        )} />
        <Route path='/how-it-works' render={ () =>(
            <div>
                <MainNavBar />
                <HowItWorks />
            </div>
        ) } /> 
        
    </Switch>
)