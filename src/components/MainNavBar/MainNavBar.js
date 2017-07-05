import React, { Component } from 'react';

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavBar extends Component {
    render() {
        return (
            <div className='main-nav-container'>
                <div className='small'>
                    mobile screen
                </div>
                <div className='normal'>
                    normal screen
                </div>
            </div>
        );
    }
}

export default MainNavBar;