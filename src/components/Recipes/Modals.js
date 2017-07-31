import React, { Component } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

import './Scss/Modals.css';

class Modals extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            showName: false,
            showAlert: false,
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.onHoverFn = this.onHoverFn.bind(this);
        this.offHoverFn = this.offHoverFn.bind(this);
    }

    showModal() {
        this.setState({
            show: true,
            animation: true
        });
    }

    hideModal() {
        this.setState({
            show: false,
            showAlert: false
        });
    }

    // Function to fire the addToCart function in the parent, as well as fire the hdieModal function
    // Both occur when you click on the button "Add to cart"
    handleAddToCart(meal) {
        this.props.addToCart(meal);
        this.setState({
            showAlert: true
        })
        // this.hideModal();
    }

    onHoverFn() {
        this.setState({
            showName: true
        })
    }

    offHoverFn() {
        this.setState({
            showName: false
        })
    }

    render() {

        const { meal } = this.props;


        const buttonBackground = {
            backgroundImage: `url(${meal.imagefull})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderStyle: 'none',
        }

        const isLoggedIn = (
            <Modal.Footer className='logged-in'>
                <div className="modal-button-box">
                    <div>
                        <Button onClick={() => this.handleAddToCart(meal)}>Add to Cart</Button>
                        
                        <select onChange={ e => this.props.handleQuantity(e)}>
                            <option>1</option>Serving
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                    <Button className='close-button' onClick={this.hideModal}>Close</Button>
                </div>
            </Modal.Footer>
        )

        const notLoggedIn = (
            <Modal.Footer className='not-logged-in'>
                <div className="modal-button-box">
                    <Button><a href="http://localhost:3001/auth">Log in to continue</a></Button>
                    
                    <Button onClick={this.hideModal}>Close</Button>
                </div>
            </Modal.Footer>
        )
        
        // console.log(this.state.showName);
        return (
            <ButtonToolbar className='modal-main'>
                <Button onMouseEnter={this.onHoverFn} onMouseLeave={this.offHoverFn} onClick={this.showModal} style={buttonBackground} className='button-styles'>
                    { 
                        this.state.showName ? <div className='overlay'><p>{meal.name}</p></div> : null
                    }
                    
                </Button>

                <SweetAlert show={this.state.showAlert} success title="Recipe added to cart!" onConfirm={this.hideModal}></SweetAlert>

                <Modal bsSize={'lg'}
                    {...this.props}   
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                    className='modal-popup'
                >
                    <Modal.Header closeButton className='title-background'>
                        <Modal.Title id="contained-modal-title-lg">{ meal.name }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='image-full'>
                        <img className="the-image" src={ meal.imagefull } alt=""/>
                        <div className='meal-info'>
                            <p className='meal-description'>{ meal.description }</p>
                            <div className='nutrition'>
                                <h1>NUTRITION INFORMATION</h1>
                                <div>
                                    <p>CALORIES: {meal.calories}</p>
                                    <p>PROTEIN: {meal.protein}</p>
                                    <p>CARBS: {meal.carbs}</p>
                                    <p>FAT: {meal.fat}</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    { this.props.loggedIn
                        ?
                            isLoggedIn
                        :
                            notLoggedIn
                    }
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default Modals;