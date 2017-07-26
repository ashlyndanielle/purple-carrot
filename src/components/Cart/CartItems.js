import React, { Component}  from 'react';

import './Scss/CartItems.css';

class CartItems extends Component {

    handleChange(e) {
        this.props.changeQuantity(e);
        setTimeout( () => {
            this.props.updateQuantity(this.props.recipesid)
        },1)
    }

    render() {
         const buttonBackground = {
            backgroundImage: `url(${this.props.thumbnail})`,
        }

        return (
            
            <div className='recipe-item'>
                    {/* <img src={props.thumbnail} alt="recipe item"/> */}
                    <div className='thumbnail-container' style={buttonBackground}></div>
                    <div className='name'>{this.props.name}</div>
                    <div className='button-box'>
                        <button className='delete' onClick={ () => this.props.deleteItem(this.props.recipesid) }>
                            Remove Item
                        </button>  
                        <div className='item-price'>
                            <select id="soflow" onChange={ e => this.handleChange(e)}>
                                 <option>{this.props.quantity}</option> 
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            <p>Price: {this.props.price * this.props.quantity}</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CartItems;