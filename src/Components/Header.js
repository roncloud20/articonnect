import React from 'react';
import logo from './Resources/tap.jpeg';

function Header() {
    return (
        <div className="Header">
            <img src={logo} width={"50px"} height={"50px"} className="Header-logo" alt="logo" />
            <div className='SearchBox'>
                <input type='search' placeholder='Looking for?' />
            </div>
            <div className='HeaderNav'>
                <label>Categories</label>
                <button>Get Listed</button>
            </div>
        </div>
    );
}

export default Header;