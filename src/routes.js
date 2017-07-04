import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import WhyPlants from './components/WhyPlants/WhyPlants';
import HowItWorks from './components/HowItWorks/HowItWorks';


export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/why-plants' component={ WhyPlants } />
        <Route path='/how-it-works' component={ HowItWorks } /> 
    </Switch>
)