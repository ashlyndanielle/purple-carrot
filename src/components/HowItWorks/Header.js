import React from 'react';
import { Link } from 'react-router-dom';

import './Scss/Header.css';

const Header = () => {
    return (
        <div className='works-header-main'>
            <div className='mobile hidden-lg hidden-md hidden-sm'>
                <div>
                    <p>Nature creates.</p>
                    <p>We deliver.</p>
                    <p>You cook.</p>
                </div>
            </div>
            <div className='mobile-bottom hidden-lg hidden-md hidden-sm'>
                <div className='p-text'>
                    <p>SELECT YOUR PLAN</p>
                    <p>AND WE'LL DO THE REST.</p>
                </div>
                <div className='plans-button'>
                    <Link to='/plans' className='plans-link'>
                        VIEW PLANS
                    </Link>
                </div>
            </div>




            <div className='desktop hidden-xs'>
                <div className='title'>
                    <p>Nature creates.</p>
                    <p>We deliver.  You cook.</p>
                </div>
                <p className='sub-title'>SELELCT YOUR PLAN AND WE'LL DO THE REST</p>
                <div className='large-button'>
                    <Link to='/plans' className='plans-link'>
                        VIEW PLANS
                    </Link>
                </div>
            </div>  
        </div>
    );
};

export default Header;