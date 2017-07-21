import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavBar from './components/MainNavBar/MainNavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WhyPlants from './components/WhyPlants/WhyPlants';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Menu from './components/Menu/Menu';
import RecipesMain from './components/Recipes/RecipesMain';
import ShoppingCart from './components/ShoppingCart/ShoppingCartMain';
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
        <Route path='/why-plants' render={ () => (
            <div>
                <MainNavBar />
                <WhyPlants />
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
        <Route path='/menu' render={ () => (
            <div>
                <MainNavBar />
                <Menu />
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
        <Route path='/shoppingcart' render={ () => (
            <div>
                <MainNavBar />
                <ShoppingCart />
                <Footer />
            </div>
        )} />

    </Switch>
)