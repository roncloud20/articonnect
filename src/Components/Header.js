import React from 'react';
import logo from './Resources/logo.png';
import SearchBox from './SearchBox';

function Header({searchChange}) {
    return (
        <div className="Header">
            <img src={logo} width={"150px"} height={"25px"} className="Header-logo" alt="logo" />
            <SearchBox search={searchChange} />
            <div className='HeaderNav'>
                <h2>Categories</h2>
                <button class="LinkButton">GET LISTED</button>
            </div>
        </div>
    );
}

export default Header;