import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

// import WhyPlants from '../WhyPlants/WhyPlants';
// import HowItWorks from '../HowItWorks/HowItWorks';
// import Menu from '../Menu/Menu';
// import RecipesMain from '../Recipes/RecipesMain';

import logo from '../../Images/mainNavBar/purpleCarrotLogo.svg'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavBar extends Component {
    constructor(props) {
    super(props);

        this.state = {
            // loggedInUser: {}
            loggedInUser: '',
            userIsLoggedIn: false
        }
    }

    // this is getting my user object and displaying it
    componentDidMount() {
        // this is sending back the user that is logged in
        axios.get('/auth/me')
            .then( response => {
                console.log("YOU'RE A USER NOW!", response);
                if (response.data === '') {
                    this.setState({
                        loggedInUser: null,
                        userIsLoggedIn: false
                    })
                } else {
                    this.setState({
                        loggedInUser: response.data,
                        userIsLoggedIn: true
                    })
                }
            })
    }

    render() {

        const loggedIn = (
                <NavDropdown eventKey={5} title="Account" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.2} href="http://localhost:3001/auth/logout">Logout</MenuItem>
                    <MenuItem eventKey={3.2}>
                        <Link to='/shoppingcart' className='nav-links'>Shopping Cart</Link>
                    </MenuItem>
                </NavDropdown>
    )
        const loggedOut= (<MenuItem eventKey={5.1} href="http://localhost:3001/auth">Login</MenuItem>)

        // let isLoggedIn = false;

        // if (this.state.loggedInUser && this.state.loggedInUser.userid) {
        //     console.log('user is logged in', this.state.loggedInUser)
        //     isLoggedIn = <MenuItem eventKey={3.2} href="http://localhost:3001/auth/logout">Logout</MenuItem>
        // } else {
        //     console.log('user is logged out', this.state.loggedInUser)
        //     isLoggedIn = <MenuItem eventKey={3.1} href="http://localhost:3001/auth">Login</MenuItem>;
        // }

        return (
            <div className='main-nav-container'>
                <Navbar className='navbar-styles' fixedTop collapseOnSelect>
                    <Navbar.Header className='vertical-align'>
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className='vertical-align'>
                        <Nav>
                            <NavItem eventKey={1}>
                                <Link to='/why-plants' className='nav-links'>Why Plants</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <Link to='/how-it-works' className='nav-links'>How it works</Link>
                            </NavItem>
                             <NavItem eventKey={3}>
                                <Link to='/cart' className='nav-links'>Cart</Link>
                            </NavItem>           
                            <NavItem eventKey={4}>
                                <Link to='/recipes' className='nav-links'>Recipes</Link>
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                                { this.state.userIsLoggedIn 
                                    ? 
                                        loggedIn
                                    : 
                                        loggedOut
                                }

                                
                            {/* </NavItem>
                            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                                  {isLoggedIn}  
                                 <MenuItem divider />  
                                <MenuItem eventKey={3.1}>Account Settings</MenuItem>
                                <MenuItem eventKey={3.2} href="http://localhost:3001/auth/logout">Logout</MenuItem> 
                             </NavDropdown>  */}
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