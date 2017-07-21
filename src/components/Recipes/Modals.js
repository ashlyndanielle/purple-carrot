import React, { Component } from 'react';

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

import './Scss/Modals.css';

class Modals extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({
            show: true
        });
    }

    hideModal() {
        this.setState({
            show: false
        });
    }

    render() {

        const { meal } = this.props;


        const buttonBackground = {
            backgroundImage: `url(${meal.thumbnail})`,
        }

        return (
            <ButtonToolbar className='modal-main'>
                <Button onClick={this.showModal} style={buttonBackground} className='button-styles'>
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">{ meal.name }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={ meal.imagefull } alt=""/>
                        <p>{ meal.description }</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
      </ButtonToolbar>
        );
    }
}

export default Modals;