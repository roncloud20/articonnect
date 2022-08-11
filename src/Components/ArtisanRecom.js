import React from 'react';
import ArtisanCard from './ArtisanCard';
// import ArtisanRecom1 from './Resources/ArtisanRecom1.jpg';
// import Artisan from './Articonnect';
// import Card from './Card';

// function ArtisanRecom() {
//     return (
//         <div>

//         </div>
//     );
// }

const ArtisanRecom=({worker})=>{
    return(
        <div className='artlist'>
            {
                worker.map((v,i)=>{
                    return < ArtisanCard
                                            name={worker[i].name} 
                                        whatsappno={worker[i].whatsappno}
                                        call={worker[i].call}
                                        // profession={worker[i].profession}
                    />
                })
            }
        </div>
    )
}

export default ArtisanRecom;

 {/* <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard />
            <ArtisanCard /> */}