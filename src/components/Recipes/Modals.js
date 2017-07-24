import React, { Component } from 'react';
import axios from 'axios';

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

import './Scss/Modals.css';

class Modals extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            showName: false
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
            show: false
        });
    }

    // Function to fire the addToCart function in the parent, as well as fire the hdieModal function
    // Both occur when you click on the button "Add to cart"
    handleAddToCart() {
        this.props.addToCart();
        this.hideModal();
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
            backgroundImage: `url(${meal.thumbnail})`,
        }
        
        // console.log(this.state.showName);
        return (
            <ButtonToolbar className='modal-main'>
                <Button onMouseEnter={this.onHoverFn} onMouseLeave={this.offHoverFn} onClick={this.showModal} style={buttonBackground} className='button-styles'>
                    { 
                        this.state.showName ? <div className='overlay'>{meal.name}</div> : null
                    }
                    
                </Button>

                <Modal bsSize={'lg'}
                    {...this.props}   
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">{ meal.name }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='image-full'>
                        {/* <div className='image-full'> */}
                            <img className="the-image"src={ meal.imagefull } alt=""/>
                        {/* </div> */}
                        <p>{ meal.description }</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleAddToCart}>Add to Cart</Button>
                       
                        <select onChange={ e => this.props.handleQuantity(e)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                        <Button onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default Modals;