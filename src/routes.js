import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavBar from './components/MainNavBar/MainNavBar';
import Home from './components/Home/Home';
import WhyPlants from './components/WhyPlants/WhyPlants';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Menu from './components/Menu/Menu';
import Plans from './components/Plans/Plans';
import Tb12 from './components/Tb12/Tb12';
import Gifts from './components/Gifts/Gifts';



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
        <Route path='/menu' render={ () => (
            <div>
                <MainNavBar />
                <Menu />
            </div>
        )} />
        <Route path='/plans' render={ () => (
            <div>
                <MainNavBar />
                <Plans />
            </div>
        )} />
        <Route path='/Tb12' render={ () => (
            <div>
                <Tb12 />
            </div>
        )} />
        <Route path='/gifts' render={ () => (
            <div>
                <MainNavBar />
                <Gifts />
            </div>
        )} />

    </Switch>
)