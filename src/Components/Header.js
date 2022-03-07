import React from 'react';
import logo from './Resources/tap.jpeg';

function Header() {
    return (
        <div className="Header">
            <img src={logo} width={"50px"} height={"50px"} className="Header-logo" alt="logo" />
            <div className='SearchBox'>
                <input type='search' placeholder='Looking for?' />
                <i class="fa fa-search"></i>
            </div>
            <div className='HeaderNav'>
                <h2>Categories</h2>
                <button class="LinkButton">GET LISTED</button>
            </div>
        </div>
    );
}

export default Header;