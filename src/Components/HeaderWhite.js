import React from 'react';
import logo from './Resources/logo.png';

function HeaderWhite() {
    return (
        <div className="Header">
            <img src={logo} width={"150px"} height={"25px"} className="Header-logo" alt="logo" />
           
            <div className='HeaderNav'>
                <h2>Categories</h2>
                <button class="LinkButton">GET LISTED</button>
            </div>
        </div>
    );
}

export default HeaderWhite;