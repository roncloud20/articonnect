import React from 'react';
import banner1 from './Resources/banner1.jpg';

function Banner() {
    return (
        <div className="Banner">
            <div className='BannerContent'>
                <h1>Get connected competent Artisans</h1>
                <p>
                    Let provide you with artisans that can effective perfect
                    your Work according to your desire. <br/>
                    Let provide you with artisans that can effective perfect
                    your Work according to your desire. <br/>
                </p>
                <h2>Let showcase your work to the world</h2>
                <button class="LinkButton">JOIN US</button>
            </div>
            <img src={banner1} width={"500px"} height={"300px"} className="Banner1" alt="banner1" />
        </div>
    );
}

export default Banner;