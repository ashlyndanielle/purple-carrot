import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

import WhyPlants from '../WhyPlants/WhyPlants';
import HowItWorks from '../HowItWorks/HowItWorks';
import Menu from '../Menu/Menu';
import Plans from '../Plans/Plans';

import logo from '../../Images/mainNavBar/purpleCarrotLogo.svg'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavBar extends Component {
    render() {
        return (
            <div className='main-nav-container'>
                <Navbar className='navbar-styles' fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}>
                                <Link to='/why-plants' className='nav-links'>Why Plants</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <Link to='/how-it-works' className='nav-links'>How it works</Link>
                            </NavItem>
                            <NavItem eventKey={3}>
                                <Link to='/menu' className='nav-links'>Menu</Link>
                            </NavItem>          
                            <NavItem eventKey={4}>
                                <Link to='/plans' className='nav-links'>Plans</Link>
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                {/*<nav className='mobile'>
                    <div className='ham'>ham</div>
                    <div className='logo'>logo</div>
                </nav>
                
                <nav className='tablet'>
                    <div className='left'>
                        <div className='ham'>ham</div>
                        <div className='logo'>logo</div>
                    </div>
                    <div className='right'>
                        <p>login</p>
                        <p>sign up</p>
                    </div>
                </nav>*/}


{/*
                <nav className='desktop row'>
                    <div className='menu-items'>
                        <div className='col-lg-1'>logo</div>
                        <p className='col-lg-1'>Why Plants</p>
                        <p className='col-lg-1'>How It Works</p>
                        <p className='col-lg-1'>Menu</p>
                        <p className='col-lg-1'>Plans</p>
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='login'>
                        <p className='col-lg-1'>login</p>
                        <p className='col-lg-1'>sign up</p>
                    </div>
                </nav>*/}

            </div>
        );
    }
}

export default MainNavBar;