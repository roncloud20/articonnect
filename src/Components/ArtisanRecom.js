import React from 'react';
// import ArtisanRecom1 from './Resources/ArtisanRecom1.jpg';

function ArtisanRecom() {
    return (
        <div className="ArtisanRecom">
            <div className='ArtisanCard'>
                <div className='ArtisanBanner'>
                    <span>Artisan Name</span>
                </div>
                <div className='ArtisanCardContent'>
                    <div className='StarRating'>
                        <span>&#9733;</span> 
                        4.1 Star Rating
                    </div>
                    <div className='whatsapp'>
                        Whatsapp Link    
                    </div>
                    <div className='mobile'>
                        Mobile Number    
                    </div>
                    <div className='whatsapp'>
                        Chat    
                    </div>
                    <button class="LinkButton">SEE FULL PROFILE</button>
                </div>
            </div>
        </div>
    );
}

export default ArtisanRecom;