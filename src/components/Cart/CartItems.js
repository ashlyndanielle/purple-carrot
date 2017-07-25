import React from 'react';

import './Scss/CartItems.css';

const CartItems = (props) => {

    const buttonBackground = {
            backgroundImage: `url(${props.thumbnail})`,
        }

    return (


                <div className='recipe-item'>
                    {/* <img src={props.thumbnail} alt="recipe item"/> */}
                    <div className='thumbnail-container' style={buttonBackground}></div>
                    <div className='name'>{props.name}</div>
                    <div className='button-box'>
                        <button className='delete'>
                            Remove Item
                        </button>
                        <div className='item-price'>
                            <select id="soflow">
                                <option>{props.quantity}</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            <p>Price: {props.price}</p>
                        </div>
                    </div>
                </div>

    );
};

export default CartItems;