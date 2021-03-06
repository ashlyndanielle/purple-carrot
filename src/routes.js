import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavBar from './components/MainNavBar/MainNavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WholeFoods from './components/WholeFoods/WholeFoods';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Cart from './components/Cart/Cart';
import RecipesMain from './components/Recipes/RecipesMain';
// import Gifts from './components/Gifts/Gifts';



export default (
    <Switch>
        <Route exact path='/' render={ () => (
            <div>
                <MainNavBar />
                <Home/> 
                <Footer />
            </div>
            ) } />
        <Route path='/wfpb' render={ () => (
            <div>
                <MainNavBar />
                <WholeFoods />
                <Footer />
            </div>
        )} />
         <Route path='/how-it-works' render={ () =>(
            <div>
                <MainNavBar />
                <HowItWorks />
                <Footer />
            </div>
        ) } />  
        <Route path='/cart' render={ () => (
            <div>
                <MainNavBar />
                <Cart />
                <Footer />
            </div>
        )} />
        <Route path='/recipes' render={ () => (
            <div>
                <MainNavBar />
                <RecipesMain />
                <Footer />
            </div>
        )} />

    </Switch>
)