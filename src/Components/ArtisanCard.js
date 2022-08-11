import React from 'react';
// import ArtisanRecom1 from './Resources/ArtisanRecom1.jpg';

function ArtisanCard({name,whatsappno,call,profession}) {
    return (
        <div className='ArtisanCard'>
           
            <div className='ArtisanBanner'>
                 {/* <img src={require("../Components/Resources/me.jpg")} alt=""/> */}
                <span>{name}</span>
            </div>
            <div className='ArtisanCardContent'>
                <div className='StarRating'>
                    <span>&#9733;</span> 
                    4.1 Star Rating
                    {/* {profession} */}
                </div>
                <div className='whatsapp'>
                    Whatsapp Link {whatsappno}   
                </div>
                <div className='mobile'>
                    Mobile Number {call}   
                </div>
                <div className='whatsapp'>
                    Chat    
                </div>
                <button class="LinkButton">SEE FULL PROFILE</button>
            </div>
        </div>
    );
}





export default ArtisanCard;

